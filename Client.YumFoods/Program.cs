using Microsoft.AspNetCore.Cors.Infrastructure;
using Shared.DTOs;
using Shared.Interfaces;
using IHostingEnvironment = Microsoft.AspNetCore.Hosting.IHostingEnvironment;
using Azure.Identity;

var builder = WebApplication.CreateBuilder(args);

//var keyVaultEndpoint = new Uri(Environment.GetEnvironmentVariable("VaultUri"));
//builder.Configuration.AddAzureKeyVault(keyVaultEndpoint, new VisualStudioCredential());



//builder.Services.AddScoped<IProductRepository<ProductDTO>>();
//builder.Services.AddScoped<IOrderDetailRepository<OrderDetailDTO>>();
//builder.Services.AddScoped<IOrderRepository<OrderDTO>>();
//builder.Services.AddScoped<IPaymentService>();
//builder.Services.AddScoped<ICartService>();

var app = builder.Build();



app.UseHttpsRedirection();
app.UseDefaultFiles();
app.UseStaticFiles();


app.Run();
//test
