
using DataAccess.Entities;
using Microsoft.EntityFrameworkCore;

namespace DataAccess;

public class YumFoodsDb : DbContext
{
    public YumFoodsDb(DbContextOptions options) : base(options)
    {
        
    }

    public DbSet<Product> Product { get; set; }
    public DbSet<Order> Order { get; set; }
    //public DbSet<Subscription> Subscription { get; set; }
}