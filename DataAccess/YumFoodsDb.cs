using Shared.Entities;
using Microsoft.EntityFrameworkCore;
using Shared.Enums;

namespace DataAccess;

public class YumFoodsDb : DbContext
{
    public YumFoodsDb(DbContextOptions<YumFoodsDb> options) : base(options)
    {
    }

    public DbSet<Product> Product { get; set; }
    public DbSet<Order> Order { get; set; }
    public DbSet<Subscription> Subscription { get; set; }
    

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        base.OnModelCreating(modelBuilder);

        modelBuilder.Entity<Product>()
            .HasMany(p => p.Orders)
            .WithMany(o => o.Products)
            .UsingEntity<Dictionary<string, object>>(
                "OrderProduct",
                j => j
                    .HasOne<Order>()
                    .WithMany()
                    .HasForeignKey("OrderId")
                    .OnDelete(DeleteBehavior.Cascade),
                j => j
                    .HasOne<Product>()
                    .WithMany()
                    .HasForeignKey("ProductId")
                    .OnDelete(DeleteBehavior.Cascade));

        modelBuilder.Entity<Order>()
            .Property(o => o.HouseType)
            .HasConversion<string>();
        modelBuilder.Entity<Order>()
            .Property(o => o.HouseType)
            .HasConversion(
                v => v.ToString(),     
                v => (HouseType)Enum.Parse(typeof(HouseType), v) 
            );

    }
}