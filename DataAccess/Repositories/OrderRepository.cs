using DataAccess.Entities;
using Microsoft.EntityFrameworkCore;

namespace DataAccess.Repositories
{
    public class OrderRepository(YumFoodsDb context)
    {
        public async Task<IEnumerable<Order>> GetAllOrdersAsync()
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
            var order = new Order()
            {
                 UserId = newOrder.UserId,
                 OrderDate = newOrder.OrderDate,
                 DeliveryDate = newOrder.DeliveryDate,
                 Products = newOrder.Products,
                 //DeliveryAdress = newOrder.DeliveryAdress,
                 //DeliveryCity = newOrder.DeliveryCity,
                 //DeliveryPostalCode = newOrder.DeliveryPostalCode,
                 //DeliveryCountry = newOrder.DeliveryCountry,
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
