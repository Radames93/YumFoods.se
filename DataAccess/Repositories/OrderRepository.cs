using DataAccess.Entities;
using Microsoft.EntityFrameworkCore;

namespace DataAccess.Repositories;

namespace DataAccess.Repositories
{
    public class OrderRepository(YumFoodsDb context)
    {
        public async Task<IEnumerable<Order>> GetAllOrdersAsync()
        {
            return await context.Order.ToListAsync();
        }

        public async Task AddOrderAsync(Order order)
        {
            await context.Order.AddAsync(order);
            await context.SaveChangesAsync();
        }

        public async Task DeleteOrderAsync(int id)
        {
            var order = await context.Order.FindAsync(id);
            if (order is null)
            {
                throw new Exception("Order not found.");
            }

            context.Order.Remove(order);
            await context.SaveChangesAsync();
        }

        //koppling till kunden så att kunden kan se sina ordrar
        //public async Task<List<Order>> GetOrdersByEmailAsync(string email)
        //{
        //    return await context.Order.Include(order => order.Products).Where(o => o.Email == email).ToListAsync();
        //}
    }
}
