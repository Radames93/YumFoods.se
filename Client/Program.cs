using System.Data.Common;
using Client.Components;
using Shared.DTOs;
using Shared.Interfaces;
using Shared.Services;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddRazorComponents()
    .AddInteractiveServerComponents();

<<<<<<< HEAD
var connectionString = Environment.GetEnvironmentVariable("YumFoodsDbConnectionString");
var connectionString2 = Environment.GetEnvironmentVariable("YumFoodsUserDbConnectionString");

//gör om, hämta mijövariabel???
=======
var connectionString = Environment.GetEnvironmentVariable("YumFoodsConnectionString");
var connectionString2 = Environment.GetEnvironmentVariable("YumFoodsUserConnectionString");
>>>>>>> 62a28a49f82c2e96c5afa4ee00cf59027c7ca57d

builder.Services.AddHttpClient("YumFoodsApiClient",
    client =>
        client.BaseAddress = new Uri(connectionString ?? "https://localhost:7216")
);
builder.Services.AddHttpClient("YumFoodsUserApiClient",
    client =>
<<<<<<< HEAD
        client.BaseAddress = new Uri(connectionString2 ??"https://localhost:7216")
=======
        client.BaseAddress = new Uri(connectionString2 ?? "https://localhost:7216")
>>>>>>> 62a28a49f82c2e96c5afa4ee00cf59027c7ca57d
);


builder.Services.AddScoped<IProductRepository<ProductDTO>, ProductService>();
builder.Services.AddScoped<IOrderDetailRepository<OrderDetailDTO>, OrderDetailService>();
builder.Services.AddScoped<IPaymentService, PaymentService>();
builder.Services.AddScoped<ICartService, CartService>();

var app = builder.Build();



// Configure the HTTP request pipeline.
if (!app.Environment.IsDevelopment())
{
    app.UseExceptionHandler("/Error", createScopeForErrors: true);
    // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
    app.UseHsts();
}

app.UseHttpsRedirection();

app.UseStaticFiles();
app.UseAntiforgery();

app.MapRazorComponents<App>()
    .AddInteractiveServerRenderMode();

app.Run();
