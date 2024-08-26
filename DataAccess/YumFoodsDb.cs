
using Microsoft.EntityFrameworkCore;

namespace DataAccess;

public class YumFoodsDb : DbContext
{
    public YumFoodsDb(DbContextOptions options) : base(options)
    {
        
    }
}