using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();

var connectionString = Environment.GetEnvironmentVariable("YumFoodsConnectionString");

// Add services to the container
builder.Services.AddDbContext<DbContext>(options =>
    options.UseMySql(connectionString, ServerVersion.AutoDetect(connectionString)));


var app = builder.Build();

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();

public class YumFoodsDbContext : DbContext
{
    public YumFoodsDbContext(DbContextOptions<YumFoodsDbContext> options) : base(options)
    {
    }

    public DbSet<Product> Products { get; set; }

    public DbSet<Order> Orders { get; set; }

    public DbSet<Subscription> Subscriptions { get; set; }
}

public class Product
{
    public int Id { get; set; }
    public string Title { get; set; }
    public double Price { get; set; }
    public string Category { get; set; }
    public string Diet { get; set; }
    public string ImgRef { get; set; }
    public string Description { get; set; }
    public string Ingredients { get; set; }
    public string Cuisine { get; set; }
}

public class Order
{

    public int Id { get; set; }
    public int UserId { get; set; }
    public DateTime OrderDate { get; set; }
    public DateTime DeliveryDate { get; set; }
    public List<Product> Products { get; set; }
    public string DeliveryAdress { get; set; }
    public string DeliveryCity { get; set; }
    public int DeliveryPostalCode { get; set; }
    public string DeliveryCountry { get; set; }
    public int Quantity { get; set; }
    public double Total { get; set; }
}

public class Subscription
{
    public int Id { get; set; }
    public string Title { get; set; }
    public string ImgRef { get; set; }
    public int Price { get; set; }
}
