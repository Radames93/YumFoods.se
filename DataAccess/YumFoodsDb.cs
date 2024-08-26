
using DataAccess.Entities;
using Microsoft.EntityFrameworkCore;
using System.Reflection.Metadata;

namespace DataAccess;

public class YumFoodsDb : DbContext
{
    public YumFoodsDb(DbContextOptions<YumFoodsDb> options) : base(options)
    {
        
    }
    public DbSet<User> User { get; set; }
    public DbSet<Product> Product { get; set; }
    public DbSet<Order> Order { get; set; }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        base.OnModelCreating(modelBuilder);
    }
}