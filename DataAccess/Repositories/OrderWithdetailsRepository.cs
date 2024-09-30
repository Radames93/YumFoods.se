using Microsoft.EntityFrameworkCore;
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
    }
}
