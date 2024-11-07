using Microsoft.EntityFrameworkCore;
using Shared.Entities;
using Shared.Interfaces;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System;

namespace DataAccess.Repositories
{
    public class OrderRepository : IOrderRepository<Order>
    {
        private readonly YumFoodsDb context;
        private readonly IProductRepository<Product> _productRepository;
        private readonly UserRepository _userRepository;
        private readonly IOrderDetailRepository<OrderDetail> _orderDetailRepository;

        public OrderRepository(YumFoodsDb context, IProductRepository<Product> productRepository, UserRepository userRepository, IOrderDetailRepository<OrderDetail> orderDetailRepository)
        {
            this.context = context;
            _productRepository = productRepository;
            _userRepository = userRepository;
            _orderDetailRepository = orderDetailRepository; // Ensure it's initialized
        }

        /// <summary>
        /// Adds a new order into the database and notifies stakeholders via LogicApp.
        /// </summary>
        /// <param name="newOrder">The new order object.</param>
        /// <param name="customerEmail">Email of the customer.</param>
        /// <param name="adminEmail">Email of the admin.</param>
        public async Task AddOrderAsync(Order newOrder, string customerEmail )
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

            // Add products to the order by verifying each product
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

            // Notify stakeholders using LogicApp
            var logicApp = new LogicApp(this, _orderDetailRepository, _productRepository, _userRepository);
            await logicApp.NotifyOrderPlacedAsync(order, customerEmail);
        }

        /// <summary>
        /// Retrieves all orders from the database.
        /// </summary>
        public async Task<List<Order>> GetAllOrdersAsync()
        {
            return await context.Order.Include(o => o.Products).ToListAsync();
        }

        /// <summary>
        /// Retrieves a specific order by its ID.
        /// </summary>
        /// <param name="id">The order ID.</param>
        public async Task<Order?> GetOrderByIdAsync(int id)
        {
            return await context.Order
                                .Include(o => o.Products)
                                .FirstOrDefaultAsync(o => o.Id == id);
        }

        /// <summary>
        /// Deletes an order from the database by its ID.
        /// </summary>
        /// <param name="id">The order ID.</param>
        public async Task DeleteOrderAsync(int id)
        {
            var order = await context.Order.FindAsync(id);
            if (order != null)
            {
                context.Order.Remove(order);
                await context.SaveChangesAsync();
            }
        }

        // Additional methods (e.g., update order) can be added here as needed
    }
}
