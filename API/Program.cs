using API.Extensions;
using DataAccess;
using DataAccess.Repositories;
using Microsoft.EntityFrameworkCore;


var builder = WebApplication.CreateBuilder(args);
builder.Services.AddControllers();

var connectionString = Environment.GetEnvironmentVariable("YumFoodsConnectionString");
//if (string.IsNullOrEmpty(connectionString))
//{
//    throw new InvalidOperationException("Connectionstring is not set");
//}

var serverVersion = new MariaDbServerVersion(new Version(11, 5, 2));
// Add services to the container
builder.Services.AddDbContext<YumFoodsDb>(options => options.UseMySql(connectionString, serverVersion));
//builder.Services.AddDbContext<YumFoodsDb>(options =>
//    options.UseMySql(connectionString, ServerVersion.AutoDetect(connectionString)));

builder.Services.AddScoped<ProductRepository>();
builder.Services.AddScoped<OrderRepository>();

var app = builder.Build();

app.UseHttpsRedirection();

app.UseAuthorization();
app.UseRouting();
app.MapControllers();

app.MapProductEndpoints();

app.Run();