using Microsoft.EntityFrameworkCore;
using Shared.Entities;
namespace DataAccess;
public class YumFoodsUserDb : DbContext
{
    public YumFoodsUserDb(DbContextOptions<YumFoodsUserDb> options) : base(options)
    {
    }
    public DbSet<User> User { get; set; }
    public DbSet<OrderDetail> OrderDetail { get; set; }
}










