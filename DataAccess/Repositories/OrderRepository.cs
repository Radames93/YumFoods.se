using System.Runtime.InteropServices.JavaScript;
using Microsoft.EntityFrameworkCore;
using Shared.Entities;
using Shared.Interfaces;

namespace DataAccess.Repositories
{
    public class OrderRepository(YumFoodsDb context) : IOrderRepository<Order>
    {
        /// <summary>
        /// Gives a list of all orders.
        /// </summary>
        /// <returns>The list of all orders from the database.</returns>
        public async Task<List<Order>> GetAllOrdersAsync()
        {
            return await context.Order.ToListAsync();
        }

        /// <summary>
        /// Gives a specific order with the matching id 
        /// </summary>
        /// <param name="id">The id of the order.</param>
        /// <returns>The sum of the two integers.</returns>
        public async Task<Order?> GetOrderByIdAsync(int id)
        {
            return await context.Order.FindAsync(id);
        }

        //koppling till kund databasen så att kunden kan se sina ordrar
        //public async Task<List<Order>> GetOrdersByEmailAsync(string email)
        //{
        //    return await context.Order.Include(order => order.Products).Where(o => o.Email == email).ToListAsync();
        //}

        /// <summary>
        /// Adds a new object into the database.
        /// </summary>
        /// <param name="newOrder">The object newOrder.</param>

        public async Task AddOrderAsync(Order newOrder)
        {
            var maxId = await context.Order
                .MaxAsync(o => (int?)o.Id);

            var newId = (maxId ?? 0) + 1;

            var order = new Order()
            {
                Id = newId,
                UserId = newOrder.UserId,
                OrderDate = DateTime.UtcNow,
                DeliveryDate = newOrder.DeliveryDate,
                Quantity = newOrder.Quantity,
                PaymentMethod = newOrder.PaymentMethod,
                Total = newOrder.Total,
                DiscountTotal = newOrder.DiscountTotal,
                HouseType = newOrder.HouseType,
                PortCode = newOrder.PortCode,
                Floor = newOrder.Floor,
                Products = new List<Product>()
            };

            foreach (var prod in newOrder.Products)
            {
                var existingProd = await context.Product.FindAsync(prod.Id);
                if (existingProd != null)
                {
                    order.Products.Add(existingProd);
                }
            }
            await context.Order.AddAsync(order);
            await context.SaveChangesAsync();
        }

        /// <summary>
        /// Deletes a specific order from the database.
        /// </summary>
        /// <param name="id">The id of the specific order.</param>
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

        //public async Task<List<Order>> GetOrdersByUserIdAsync(int userId)
        //{
        //    return await context.Order
        //        .Where(o => o.User.Id == userId)
        //        .Include(o => o.OrderDetails) // Hämta även orderdetaljer
        //        .ToListAsync();
        //}

    }
}