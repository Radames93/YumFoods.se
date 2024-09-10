using API.Extensions;
using API.Stripe;
using DataAccess;
using DataAccess.Repositories;
using Microsoft.EntityFrameworkCore;
using Shared.Entities;
using Shared.Interfaces;

var builder = WebApplication.CreateBuilder(args);


builder.Services.AddControllers();

//var connectionString = Environment.GetEnvironmentVariable("YumFoodsDbConnectionString");
//var connectionString2 = Environment.GetEnvironmentVariable("YumFoodsUserDbConnectionString");

builder.Services.AddScoped<IProductRepository<Product>, ProductRepository>();
builder.Services.AddScoped<IOrderRepository<Order>, OrderRepository>();
builder.Services.AddScoped<IOrderDetailRepository<OrderDetail>, OrderDetailRepository>();
builder.Services.AddScoped<ISubscriptionRepository<Subscription>, SubscriptionRepository>();

var conn1 = "Server=192.168.11.85;Database=yumfoodsdb;Uid=root;Pwd=admin;SslMode=VerifyCA;SslCa=C:\\Users\\Vivian\\Desktop\\ca-cert.pem;";
var conn2 = "Server=192.168.11.85;Database=yumfoodsuserdb;Uid=root;Pwd=admin;SslMode=VerifyCA;SslCa=C:\\Users\\Vivian\\Desktop\\ca-cert.pem;";
var localConn1 = "Server=localhost;Database=yumfoodsdb;Uid=root;Pwd=admin;";
var localConn2 = "Server=localhost;Database=yumfoodsuserdb;Uid=root;Pwd=admin;";

builder.Services.AddDbContext<YumFoodsDb>(options =>
    options.UseMySql(conn1, ServerVersion.AutoDetect(conn1)));

builder.Services.AddDbContext<YumFoodsUserDb>(options =>
    options.UseMySql(conn2, ServerVersion.AutoDetect(conn2)));

builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowAllOrigins",
        //�ndra policy till ""AllowSpecificOrigin" senare skede
        policy =>
        {
            //�ndra policy.WithOrigins("http://localhostxxxxx.. f�r frontend")
            policy.AllowAnyOrigin()
                .AllowAnyMethod()
                .AllowAnyHeader();
        });
    //builder.Services.AddControllers();
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
//app.MapUserEndpoints();

app.UseHttpsRedirection();
app.UseCors("AllowAllOrigins");
app.UseAuthorization();

app.MapControllers();

app.Run();