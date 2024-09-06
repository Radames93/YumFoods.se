
var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddRazorComponents()
    .AddInteractiveServerComponents();

builder.Services.AddHttpClient("YumFoodsApiClient",
    client =>
        client.BaseAddress = new Uri("https://localhost:7296")
);
builder.Services.AddHttpClient("YumFoodsUserApiClient",
    client =>
        client.BaseAddress = new Uri("https://localhost:7296")
);


//builder.Services.AddScoped<IProductRepository<ProductDTO>, ProductService>();
//builder.Services.AddScoped<IOrderDetailRepository<OrderDetailDTO>, OrderDetailService>();
//builder.Services.AddScoped<IOrderRepository<OrderDTO>, OrderService>();
//builder.Services.AddScoped<ISubscriptionRepository<SubscriptionDTO>, SubscriptionService>();
//builder.Services.AddScoped<IPaymentService, PaymentService>();
//builder.Services.AddScoped<ICartService, CartService>();

var conn1 = "Server=192.168.11.85;Database=yumfoodsdb;Uid=root;Pwd=admin;SslMode=VerifyCA;SslCa=C:\\Users\\FRask-laptop\\Desktop\\Yum Foods\\ca-cert.pem;";
var conn2 = "Server=192.168.11.85;Database=yumfoodsuserdb;Uid=root;Pwd=admin;SslMode=VerifyCA;SslCa=C:\\Users\\FRask-laptop\\Desktop\\Yum Foods\\ca-cert.pem;";
var localConn1 = "Server=localhost;Database=yumfoodsdb;Uid=root;Pwd=admin;";
var localConn2 = "Server=localhost;Database=yumfoodsuserdb;Uid=root;Pwd=admin;";

builder.Services.AddDbContext<YumFoodsDb>(options =>
    options.UseMySql(localConn1, ServerVersion.AutoDetect(localConn1)));

builder.Services.AddDbContext<YumFoodsUserDb>(options =>
    options.UseMySql(localConn2, ServerVersion.AutoDetect(localConn2)));

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

//app.MapRazorComponents<App>()
//    .AddInteractiveServerRenderMode();

app.Run();