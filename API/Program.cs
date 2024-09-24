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
var connectionString = Environment.GetEnvironmentVariable("AzureDb1");
var connectionString2 = Environment.GetEnvironmentVariable("AzureDb2");


builder.Services.AddScoped<IProductRepository<Product>, ProductRepository>();
builder.Services.AddScoped<IOrderRepository<Order>, OrderRepository>();
builder.Services.AddScoped<IOrderDetailRepository<OrderDetail>, OrderDetailRepository>();
builder.Services.AddScoped<ISubscriptionRepository<Subscription>, SubscriptionRepository>();

var conn1 = "Server=yumfoodsdatabase.mysql.database.azure.com ;Port=3306;Database=yumfoodsdb;Uid=yumfoodsadmin;Pwd=Jonas55!;SslMode=VerifyCA;SslCa=C:\\Users\\Vivian\\Desktop\\ca-cert.pem;";
var conn2 = "Server=yumfoodsdatabase.mysql.database.azure.com ;Port=3306;Database=yumfoodsuserdb;Uid=yumfoodsadmin;Pwd=Jonas55!;SslMode=VerifyCA;SslCa=C:\\Users\\Vivian\\Desktop\\ca-cert.pem;";
var localConn1 = "Server=localhost;Database=yumfoodsdb;Uid=root;Pwd=admin;";
var localConn2 = "Server=localhost;Database=yumfoods.userdb;Uid=root;Pwd=admin;";

builder.Services.AddDbContext<YumFoodsDb>(options =>
    options.UseMySql(localConn1, ServerVersion.AutoDetect(localConn1)));

builder.Services.AddDbContext<YumFoodsUserDb>(options =>
    options.UseMySql(localConn2, ServerVersion.AutoDetect(localConn2)));

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
app.MapOrderAndDetailEndpoints();
//app.MapUserEndpoints();

app.UseHttpsRedirection();
app.UseCors("AllowAllOrigins");
app.UseAuthorization();

app.MapControllers();

app.Run();