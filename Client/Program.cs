using Client.Components;
using Shared.DTOs;
using Shared.Interfaces;
using Shared.Services;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddRazorComponents()
    .AddInteractiveServerComponents();

//gör om, hämta mijövariabel???


builder.Services.AddHttpClient("YumFoodsConnectionString",
    client =>
        client.BaseAddress = new Uri("https://localhost:7216")
);
builder.Services.AddHttpClient("YumFoodsUserConnectionString",
    client =>
        client.BaseAddress = new Uri("https://localhost:7216")
);


builder.Services.AddScoped<IProductRepository<ProductDTO>, ProductService>();
builder.Services.AddScoped<IOrderDetailRepository<OrderDetailDTO>, OrderDetailService>();


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
