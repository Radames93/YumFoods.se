using API.Extensions;
using API.Stripe;
using DataAccess;
using DataAccess.Repositories;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;
using Shared.Entities;
using Shared.Interfaces;
using System.Text;

var builder = WebApplication.CreateBuilder(args);


builder.Services.AddControllers();

//var connectionString = Environment.GetEnvironmentVariable("YumFoodsDbConnectionString");
//var connectionString2 = Environment.GetEnvironmentVariable("YumFoodsUserDbConnectionString");

builder.Services.AddScoped<IProductRepository<Product>, ProductRepository>();
builder.Services.AddScoped<IOrderRepository<Order>, OrderRepository>();
builder.Services.AddScoped<IOrderDetailRepository<OrderDetail>, OrderDetailRepository>();
builder.Services.AddScoped<ISubscriptionRepository<Subscription>, SubscriptionRepository>();
builder.Services.AddScoped<OrderWithDetailsRepository>();
builder.Services.AddScoped<UserRepository>();


//C:\\Users\\gewer\\OneDrive\\Skrivbord\\ca-cert.pem;

var conn1 = "Server=192.168.11.85;Database=yumfoodsdb;Uid=root;Pwd=admin;SslMode=VerifyCA;SslCa=C:\\Users\\gewer\\OneDrive\\Skrivbord\\ca-cert.pem;";
var conn2 = "Server=192.168.11.85;Database=yumfoods.userdb;Uid=root;Pwd=admin;SslMode=VerifyCA;SslCa=C:\\Users\\gewer\\OneDrive\\Skrivbord\\ca-cert.pem";
var localConn1 = "Server=localhost;Database=yumfoodsdb;Uid=root;Pwd=admin;";
var localConn2 = "Server=localhost;Database=yumfoods.userdb;Uid=root;Pwd=admin;";

        // Save the certificate to a temporary file
        var tempFilePath = Path.GetTempFileName();
        File.WriteAllBytes(tempFilePath, sslCertificate.Export(X509ContentType.Cert));

        // Construct the connection string for YumFoodsDb with SSL options
        var completeConnectionString = $"{connectionString};SslMode=VerifyCA;SslCa={tempFilePath}";
        var completeConnectionString2 = $"{connectionString2};SslMode=VerifyCA;SslCa={tempFilePath}";
        //var completeConnectionString = "Server=localhost;Database=yumfoodsdb;Uid=root;Pwd=admin;";
        //var completeConnectionString2 = "Server=localhost;Database=yumfoods.userdb;Uid=root;Pwd=admin;";
        // hello
        // Configure your DbContext to use MySQL with the retrieved connection string
        builder.Services.AddDbContext<YumFoodsDb>(options =>
        {
            options.UseMySql(completeConnectionString, ServerVersion.AutoDetect(completeConnectionString));
        });

builder.Services.AddDbContext<YumFoodsUserDb>(options =>
    options.UseMySql(localConn2, ServerVersion.AutoDetect(localConn2)));

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

//var jwtKey = Environment.GetEnvironmentVariable("JWT_KEY");

builder.Services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme)
    .AddJwtBearer(options =>
    {
        options.TokenValidationParameters = new TokenValidationParameters
        {
            ValidateIssuer = true,
            ValidateAudience = true,
            ValidateLifetime = true,
            ValidateIssuerSigningKey = true,
            ValidIssuer = builder.Configuration["Jwt:Issuer"], // From appsettings.json
            ValidAudience = builder.Configuration["Jwt:Audience"], // From appsettings.json
            IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(builder.Configuration["Jwt:Key"]))
        };
    });

//Add the AuthenticationService

builder.Services.AddSingleton(new AuthenticationService(
    builder.Configuration["Jwt:Key"],
    builder.Configuration["Jwt:Issuer"],
    builder.Configuration["Jwt:Audience"]
));


var app = builder.Build();

app.MapProductEndpoints();
app.MapOrderEndpoints();
app.MapOrderDetailEndpoints();
app.MapSubscriptionEndpoints();
app.MapPaymentsEndPoints();
app.MapPurchaseEndpoints();
app.MapUserEndpoints();

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