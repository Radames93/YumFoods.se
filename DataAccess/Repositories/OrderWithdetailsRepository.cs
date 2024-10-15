using Microsoft.EntityFrameworkCore;
using Shared.DTOs;
using Shared.Entities;
using Shared.Interfaces;

namespace DataAccess.Repositories
{
    public class OrderWithDetailsRepository
    {
        private readonly YumFoodsDb _orderContext;        // Open database for orders
        private readonly YumFoodsUserDb _orderDetailContext;  // Secure database for order details

        public OrderWithDetailsRepository(YumFoodsDb orderContext, YumFoodsUserDb orderDetailContext)
        {
            _orderContext = orderContext;
            _orderDetailContext = orderDetailContext;
        }

        // Method to add both Order and OrderDetail
        public async Task AddOrderAndDetailsAsync(Order newOrder, OrderDetail newOrderDetail)
        {
            try
            {
                // Add the order to the orderContext (YumFoodsDb)
                await _orderContext.Order.AddAsync(newOrder);
                await _orderContext.SaveChangesAsync();

                // Add the order detail to the orderDetailContext (YumFoodsUserDb)
                newOrderDetail.OrderId = newOrder.Id; // Link the new order's ID to the order detail
                await _orderDetailContext.OrderDetail.AddAsync(newOrderDetail);
                await _orderDetailContext.SaveChangesAsync();
            }
            catch (Exception ex)
            {
                // Rollback order if adding order details fails
                var order = await _orderContext.Order.FindAsync(newOrder.Id);
                if (order != null)
                {
                    _orderContext.Order.Remove(order);
                    await _orderContext.SaveChangesAsync();
                }

                throw new Exception("Error adding order and order details: " + ex.Message);
            }
        }

        public async Task<List<PurchaseRequest>> GetOrdersByUserIdAsync(int userId)
        {
            var user = await _orderDetailContext.User
                                          .FirstOrDefaultAsync(u => u.Id == userId);

            if (user == null)
            {
                return null;
            }

            var orders = await _orderContext.Order
                                             .Where(o => o.UserId == userId)
                                             .ToListAsync();

            if (orders.Count == 0)
            {
                return new List<PurchaseRequest>();
            }


            var orderIds = orders.Select(o => o.Id).ToList();

            var orderDetails = await _orderDetailContext.OrderDetail
                                                  .Where(od => orderIds.Contains(od.OrderId))
                                                  .ToListAsync();

            var result = new List<PurchaseRequest>();

            //kanske måste hanteras separat
            foreach (var order in orders)
            {
                var orderWithDetails = new PurchaseRequest
                {
                    
                    OrderDate = order.OrderDate,
                    DeliveryDate = order.DeliveryDate,
                    Quantity = order.Quantity,
                    PaymentMethod = order.PaymentMethod,
                    Total = order.Total,
                    //OrderDetails = orderDetails.Where(od => od.OrderId == order.Id).ToList() // Matcha orderdetaljer
                };

                result.Add(orderWithDetails);
            }

            return result;
        }

    }
}
