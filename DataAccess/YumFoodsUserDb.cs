using DataAccess.Entities;
using Microsoft.EntityFrameworkCore;

namespace DataAccess;

public class YumFoodsUserDb : DbContext
{
    public YumFoodsUserDb(DbContextOptions options) : base(options)
    {
    
    }

    public DbSet<User> Users { get; set; }
}
