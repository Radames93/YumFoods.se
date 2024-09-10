using Microsoft.EntityFrameworkCore;
using Shared.Entities;
using Shared.Interfaces;

namespace DataAccess.Repositories;


public class OrderDetailRepository(YumFoodsUserDb context) : IOrderDetailRepository<OrderDetail>
{
    ///summary
    /// Gives a list of all order details
    ///summary
    /// <returns>A list of all the order details connected to a specific order from database.</returns>
    public async Task<List<OrderDetail>> GetAllOrderDetailsAsync()
    {
        return context.OrderDetail.ToList();
    }

    /// <summary>
    /// Gives the details of a sepcific order using id
    /// </summary>
    /// <param name="id">The id of the orderdetail.</param>
    /// <returns>The orderdetail of the orderdetail with the matching id.</returns>
    public async Task<OrderDetail?> GetOrderDetailByIdAsync(int id)
    {
        return await context.OrderDetail.FindAsync(id);
    }

    /// <summary>
    /// Gives the details of a specific order using orderId
    /// </summary>
    /// <param name="orderId">The id of the order.</param>
    /// <returns>The orderdetails for a specfic order.</returns>
    public async Task<OrderDetail?> GetOrderDetailByOrderIdAsync(int orderId)
    {
        return await context.OrderDetail
            .FirstOrDefaultAsync(od => od.OrderId == orderId);
    }

    /// <summary>
    /// Adds orderdetails of an order into database
    /// </summary>
    /// <param name="oD">The object orderdetail.</param>
    public async Task AddOrderDetailAsync(OrderDetail oD)
    {
        await context.OrderDetail.AddAsync(oD);
        await context.SaveChangesAsync();
    }
}