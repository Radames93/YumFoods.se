using API.Extensions;
using API.Stripe;
using Azure.Identity;
using Azure.Security.KeyVault.Secrets;
using Azure.Storage.Blobs;
using DataAccess;
using DataAccess.Repositories;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Configuration.AzureKeyVault;
using Shared.Entities;
using Shared.Interfaces;
using Azure.Extensions.AspNetCore.Configuration.Secrets;
using System.IO;
using System.Security.Cryptography.X509Certificates;

internal class Program
{
    private static async Task Main(string[] args) // Use async for KeyVault secret retrieval
    {
        var builder = WebApplication.CreateBuilder(args);

        builder.Services.AddControllers();

        builder.Services.AddScoped<IProductRepository<Product>, ProductRepository>();
        builder.Services.AddScoped<IOrderRepository<Order>, OrderRepository>();
        builder.Services.AddScoped<IOrderDetailRepository<OrderDetail>, OrderDetailRepository>();
        builder.Services.AddScoped<ISubscriptionRepository<Subscription>, SubscriptionRepository>();
        builder.Services.AddScoped<UserRepository>();
        builder.Services.AddScoped<OrderWithDetailsRepository>();

        // Retrieve KeyVault settings from appsettings.json
        var keyVaultURL = builder.Configuration["KeyVault:KeyVaultURL"];
        var keyVaultClientId = builder.Configuration["KeyVault:ClientId"];
        var keyVaultClientSecret = builder.Configuration["KeyVault:ClientSecret"];
        var keyVaultDirectoryID = builder.Configuration["KeyVault:DirectoryID"];

        // Check for missing values to avoid exceptions
        if (string.IsNullOrEmpty(keyVaultURL) || string.IsNullOrEmpty(keyVaultClientId) ||
            string.IsNullOrEmpty(keyVaultClientSecret) || string.IsNullOrEmpty(keyVaultDirectoryID))
        {
            throw new Exception("One or more KeyVault configuration values are missing.");
        }

        // Use ClientSecretCredential for Azure Key Vault authentication
        var credential = new ClientSecretCredential(keyVaultDirectoryID, keyVaultClientId, keyVaultClientSecret);

        // Add Azure Key Vault to the configuration pipeline
        builder.Configuration.AddAzureKeyVault(keyVaultURL, keyVaultClientId, keyVaultClientSecret);

        // Initialize SecretClient to retrieve secrets from KeyVault
        var client = new SecretClient(new Uri(keyVaultURL), credential);

        // Retrieve the database connection strings from Azure Key Vault
        var secretResponse = await client.GetSecretAsync("yumfoodsp");
        var connectionString = secretResponse.Value.Value;

        var secretResponse2 = await client.GetSecretAsync("yumfoodsusers");
        var connectionString2 = secretResponse2.Value.Value;

        // Blob Storage configuration
        var blobServiceClient = new BlobServiceClient(builder.Configuration["BlobStorage:ConnectionString"]);

        var blobContainerClient = blobServiceClient.GetBlobContainerClient("yumfoodssertification"); // Your container name
        var blobClient = blobContainerClient.GetBlobClient("DigiCertGlobalRootCA.crt.pem"); // Your certificate file name in Blob Storage

        // Download the certificate as a stream
        var certStream = new MemoryStream();
        await blobClient.DownloadToAsync(certStream);
        certStream.Position = 0;  // Reset stream position after download

        // Read the certificate from the stream (in-memory)
        var sslCertificate = new X509Certificate2(certStream.ToArray());

        // Save the certificate to a temporary file
        var tempFilePath = Path.GetTempFileName();
        File.WriteAllBytes(tempFilePath, sslCertificate.Export(X509ContentType.Cert));

        // Construct the connection string for YumFoodsDb with SSL options
        var completeConnectionString = $"{connectionString};SslMode=VerifyCA;SslCa={tempFilePath}";
        var completeConnectionString2 = $"{connectionString2};SslMode=VerifyCA;SslCa={tempFilePath}";

        //vivians strings
        var conn1 = "Server=192.168.11.85;Database=yumfoodsdb;Uid=root;Pwd=admin;SslMode=VerifyCA;SslCa=C:\\Users\\Vivian\\Desktop\\ca-cert.pem;";
        var conn2 = "Server=192.168.11.85;Database=yumfoodsuserdb;Uid=root;Pwd=admin;SslMode=VerifyCA;SslCa=C:\\Users\\Vivian\\Desktop\\ca-cert.pem;";
        var localConn1 = "Server=localhost;Database=yumfoodsdb;Uid=root;Pwd=admin;";
        var localConn2 = "Server=localhost;Database=yumfoods.userdb;Uid=root;Pwd=admin;";

        // Configure your DbContext to use MySQL with the retrieved connection string
        builder.Services.AddDbContext<YumFoodsDb>(options =>
        {
            options.UseMySql(completeConnectionString, ServerVersion.AutoDetect(completeConnectionString));
        });

        builder.Services.AddDbContext<YumFoodsUserDb>(options =>
        {
            options.UseMySql(completeConnectionString2, ServerVersion.AutoDetect(completeConnectionString2));
        });

        // CORS policy configuration
        builder.Services.AddCors(options =>
        {
            options.AddPolicy("AllowSpecificOrigins", policy =>
            {
                policy.WithOrigins("https://localhost:7023", "https://yumfoodsdev.azurewebsites.net")
                      .AllowAnyMethod()
                      .AllowAnyHeader();
            });
        });

        builder.Services.AddOptions<StripeConfig>().BindConfiguration(nameof(StripeConfig));
        builder.Services.AddScoped<StripeClient>();

        builder.Services.AddRouting(options => options.LowercaseUrls = true);

        var app = builder.Build();

        app.MapProductEndpoints();
        app.MapOrderEndpoints();
        app.MapOrderDetailEndpoints();
        app.MapSubscriptionEndpoints();
        app.MapPaymentsEndPoints();
        app.MapUserEndpoints();
        app.MapPurchaseEndpoints();

        app.UseHttpsRedirection();
        app.UseCors("AllowSpecificOrigins");  // Apply CORS
        app.UseAuthorization();


        app.MapControllers();

        app.Run();

        // Cleanup the temporary file after usej
        try
        {
            if (File.Exists(tempFilePath))
            {
                File.Delete(tempFilePath);
            }
        }
        catch (Exception ex)
        {
            Console.WriteLine($"Error deleting temp file: {ex.Message}");
        }
    }
}