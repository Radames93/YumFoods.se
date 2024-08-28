using DataAccess.Entities;
using Microsoft.EntityFrameworkCore;

namespace DataAccess;

public class YumFoodsUserDb : DbContext
{
    public YumFoodsUserDb(DbContextOptions<YumFoodsUserDb> options) : base(options)
    {

    }

    public DbSet<User> User { get; set; }
    public DbSet<DeliveryDetails> DeliveryDetails { get; set; }
}