using DataAccess.Entities;
using Microsoft.EntityFrameworkCore;
using Shared.Interfaces;

namespace DataAccess.Repositories
{
    public class OrderRepository(YumFoodsDb context) : IOrderRepository
    {
        public async Task<List<Order>> GetAllOrdersAsync()
        {
            return await context.Order.ToListAsync();
        }

        public async Task<Order?> GetOrderByIdAsync(int id)
        {
            return await context.Order.FindAsync(id);
        }

        //koppling till kund databasen så att kunden kan se sina ordrar
        //public async Task<List<Order>> GetOrdersByEmailAsync(string email)
        //{
        //    return await context.Order.Include(order => order.Products).Where(o => o.Email == email).ToListAsync();
        //}

        public async Task AddOrderAsync(Order newOrder)
        {
            var maxId = await context.Order
                .MaxAsync(o => (int?)o.Id);

            var newId = (maxId ?? 0) + 1;

            var order = new Order()
            {
                Id = newId,
                 UserId = newOrder.UserId,
                 OrderDate = newOrder.OrderDate,
                 DeliveryDate = newOrder.DeliveryDate,
                 Products = newOrder.Products,
                 Quantity = newOrder.Quantity,
                 Total = newOrder.Total
            };

            await context.Order.AddAsync(order);
            await context.SaveChangesAsync();
        }

        public async Task DeleteOrderAsync(int id)
        {
            var order = await context.Order.FirstOrDefaultAsync(p => p.Id == id);
            if (order is null)
            {
                return;
            }

            context.Order.Remove(order);
            await context.SaveChangesAsync();
        }
    }
}
