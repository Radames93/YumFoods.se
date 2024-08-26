using DataAccess;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);


builder.Services.AddControllers();

var connectionString = Environment.GetEnvironmentVariable("YumFoodsDbConnectionString");
var connectionString2 = Environment.GetEnvironmentVariable("YumFoodsUserDbConnectionString");

builder.Services.AddDbContext<YumFoodsDb>(options =>
    options.UseMySql(connectionString, ServerVersion.AutoDetect(connectionString)));

builder.Services.AddDbContext<YumFoodsUserDb>(options =>
    options.UseMySql(connectionString2, ServerVersion.AutoDetect(connectionString2)));

var app = builder.Build();

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();