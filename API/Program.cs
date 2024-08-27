using API.Extensions;
using DataAccess;
using DataAccess.Repositories;
using Microsoft.EntityFrameworkCore;


// Add services to the container.
var builder = WebApplication.CreateBuilder(args);
   
builder.Services.AddControllers();

var connectionString = Environment.GetEnvironmentVariable("YumFoodsConnectionString");

builder.Services.AddScoped<ProductRepository>();
builder.Services.AddScoped<OrderRepository>();
builder.Services.AddScoped<SubscriptionRepository>();

builder.Services.AddDbContext<YumFoodsDb>(options =>
    options.UseMySql(connectionString, ServerVersion.AutoDetect(connectionString)));

builder.Services.AddCors( options =>
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
    builder.Services.AddControllers();
});

builder.Services.AddScoped<ProductRepository>();
builder.Services.AddScoped<OrderRepository>();

builder.Services.AddRouting(options => options.LowercaseUrls = true);


var app = builder.Build();

app.MapProductEndpoints();
app.MapOrderEndpoints();
//app.MapSubscriptionEndpoints();


app.UseHttpsRedirection();

app.UseAuthorization();
app.UseRouting();
app.MapControllers();
app.UseCors();


app.Run();