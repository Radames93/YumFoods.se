using DataAccess.Entities;
using Microsoft.EntityFrameworkCore;

namespace DataAccess.Repositories;

public class OrderRepository(YumFoodsDb context)
{
    public async Task<IEnumerable<Order>> GetAllProductsAsync()
    {
        return await context.Order.ToListAsync();
    }

    public async Task<Order?> GetOrderByIdAsync(int id)
    {
        return await context.Order.FindAsync(id);
    }
}
