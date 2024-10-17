using Microsoft.EntityFrameworkCore;
using Shared.Entities;
using Shared.Enums;

namespace DataAccess;
public class YumFoodsUserDb : DbContext
{
    public YumFoodsUserDb(DbContextOptions<YumFoodsUserDb> options) : base(options)
    {
    }
    public DbSet<User> User { get; set; }
    public DbSet<OrderDetail> OrderDetail { get; set; }
    public DbSet<Company> Company { get; set; }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        base.OnModelCreating(modelBuilder);

        modelBuilder.Entity<Company>()
            .HasKey(c => c.OrganizationNumber);  
        modelBuilder.Entity<User>()
            .Property(u => u.UserType)
            .HasConversion<string>();
    }

}










