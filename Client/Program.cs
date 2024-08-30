using Client.Components;
using Shared.DTOs;
using Shared.Interfaces;
using Shared.Services;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddRazorComponents()
    .AddInteractiveServerComponents();

var connectionString = Environment.GetEnvironmentVariable("YumFoodsConnectionString");
var connectionString2 = Environment.GetEnvironmentVariable("YumFoodsUserConnectionString");

builder.Services.AddHttpClient(connectionString,
    client =>
        client.BaseAddress = new Uri("https://localhost:7216")
);
builder.Services.AddHttpClient(connectionString2,
    client =>
        client.BaseAddress = new Uri("https://localhost:7216")
);


builder.Services.AddScoped<IProductRepository<ProductDTO>, ProductService>();
builder.Services.AddScoped<IOrderDetailRepository<OrderDetailDTO>, OrderDetailService>();
builder.Services.AddScoped<IPaymentHttp, PaymentHttpService>();

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
