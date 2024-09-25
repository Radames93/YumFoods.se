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

//C: \Users\gewer\OneDrive\Skrivbor

//d ddddddd




var conn1 = "Server=192.168.11.85;Database=yumfoodsdb;Uid=root;Pwd=admin;SslMode=VerifyCA;SslCa=C:\\Users\\Pedram Hejazi Kenari\\Desktop\\ca-cert.pem;";


var conn2 = "Server=192.168.11.85;Database=yumfoods.userdb;Uid=root;Pwd=admin;SslMode=VerifyCA;SslCa=C:\\Users\\Pedram Hejazi Kenari\\Desktop\\ca-cert.pem";
var localConn1 = "Server=localhost;Database=yumfoodsdb;Uid=root;Pwd=admin;";
var localConn2 = "Server=localhost;Database=yumfoods.userdb;Uid=root;Pwd=admin;";

builder.Services.AddDbContext<YumFoodsDb>(options =>
    options.UseMySql(conn1, ServerVersion.AutoDetect(conn1)));

builder.Services.AddDbContext<YumFoodsUserDb>(options =>
    options.UseMySql(localConn2, ServerVersion.AutoDetect(localConn2)));

builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowAllOrigins",
        //ändra policy till ""AllowSpecificOrigin" senare skede
        policy =>
        {
            //Ändra policy.WithOrigins("http://localhostxxxxx.. för frontend")
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



using Microsoft.EntityFrameworkCore;
using Shared.Entities;
using Shared.Interfaces;

namespace DataAccess.Repositories
{
    public class OrderWithDetailsRepository
    {
        private readonly YumFoodsDb _orderContext;        // Open database for orders
        private readonly YumFoodsUserDb _orderDetailContext;  // Secure database for order details

        public OrderWithDetailsRepository(YumFoodsDb orderContext, YumFoodsUserDb orderDetailContext)
        {
            _orderContext = orderContext;
            _orderDetailContext = orderDetailContext;
        }

        // Method to add both Order and OrderDetail
        public async Task AddOrderAndDetailsAsync(Order newOrder, OrderDetail newOrderDetail)
        {
            try
            {
                // Add the order to the orderContext (YumFoodsDb)
                await _orderContext.Order.AddAsync(newOrder);
                await _orderContext.SaveChangesAsync();

                // Add the order detail to the orderDetailContext (YumFoodsUserDb)
                newOrderDetail.OrderId = newOrder.Id; // Link the new order's ID to the order detail
                await _orderDetailContext.OrderDetail.AddAsync(newOrderDetail);
                await _orderDetailContext.SaveChangesAsync();
            }
            catch (Exception ex)
            {
                // Rollback order if adding order details fails
                var order = await _orderContext.Order.FindAsync(newOrder.Id);
                if (order != null)
                {
                    _orderContext.Order.Remove(order);
                    await _orderContext.SaveChangesAsync();
                }

                throw new Exception("Error adding order and order details: " + ex.Message);
            }
        }
    }
}
