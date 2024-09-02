using System.Data.Common;
using Client.Components;
using Client.Services;
using Shared.DTOs;
using Shared.Interfaces;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddRazorComponents()
    .AddInteractiveServerComponents();

var connectionString = Environment.GetEnvironmentVariable("YumFoodsDbConnectionString");
var connectionString2 = Environment.GetEnvironmentVariable("YumFoodsUserDbConnectionString");

//g�r om, h�mta mij�variabel???

builder.Services.AddHttpClient("YumFoodsApiClient",
    client =>
        client.BaseAddress = new Uri(connectionString ?? "https://localhost:7216")
);
builder.Services.AddHttpClient("YumFoodsUserApiClient",
    client =>
        client.BaseAddress = new Uri(connectionString2 ??"https://localhost:7216")
);


builder.Services.AddScoped<IProductRepository<ProductDTO>, ProductService>();
builder.Services.AddScoped<IOrderDetailRepository<OrderDetailDTO>, OrderDetailService>();
builder.Services.AddScoped<IOrderRepository<OrderDTO>, OrderService>();
builder.Services.AddScoped<ISubscriptionRepository<SubscriptionDTO>, SubscriptionService>();


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