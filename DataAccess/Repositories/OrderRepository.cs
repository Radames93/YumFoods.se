using Microsoft.EntityFrameworkCore;
using Shared.Entities;
using Shared.Interfaces;
using System.Collections.Generic;
using System.Threading.Tasks;


namespace DataAccess.Repositories
{
    public class OrderRepository : IOrderRepository<Order>
    {
        private readonly YumFoodsDb context;
        private readonly IProductRepository<Product> _productRepository; // Product repository

        public OrderRepository(YumFoodsDb context, IProductRepository<Product> productRepository)
        {
            this.context = context;
            _productRepository = productRepository;  // Initialize product repository
        }

        /// <summary>
        /// Adds a new order into the database.
        /// </summary>
        /// <param name="newOrder">The new order object.</param>
        /// <param name="customerEmail">Email of the customer.</param>
        /// <param name="adminEmail">Email of the admin.</param>
        public async Task AddOrderAsync(Order newOrder, string customerEmail, string adminEmail)
        {
            var maxId = await context.Order.MaxAsync(o => (int?)o.Id);
            var newId = (maxId ?? 0) + 1;

            var order = new Order()
            {
                Id = newId,
                UserId = newOrder.UserId,
                OrderDate = DateTime.UtcNow,
                DeliveryDate = newOrder.DeliveryDate,
                DeliveryTime = newOrder.DeliveryTime,
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

            // Create an instance of LogicApp to notify stakeholders
            var logicApp = new LogicApp(this, _productRepository);
            await logicApp.NotifyOrderPlacedAsync(order, customerEmail, adminEmail);
        }

        public async Task<List<Order>> GetAllOrdersAsync()
        {
            return await context.Order.ToListAsync();
        }

        public async Task<Order?> GetOrderByIdAsync(int id)
        {
            return await context.Order.FindAsync(id);
        }

        public async Task DeleteOrderAsync(int id)
        {
            var order = await context.Order.FirstOrDefaultAsync(p => p.Id == id);
            if (order != null)
            {
                context.Order.Remove(order);
                await context.SaveChangesAsync();
            }
        }

        // Other methods...
    }
}
