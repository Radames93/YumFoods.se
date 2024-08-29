using Microsoft.EntityFrameworkCore;
using Shared.Entities;
using Shared.Interfaces;

namespace DataAccess.Repositories;

public class OrderDetailRepository(YumFoodsUserDb context) : IOrderDetailRepository
{
    public async Task<List<OrderDetail>> GetAllOrderDetailsAsync()
    {
        return context.OrderDetail.ToList();
    }

    public async Task<OrderDetail> GetOrderDetailByIdAsync(int id)
    {
        return await context.OrderDetail.FindAsync(id);
    }


    public async Task<OrderDetail?> GetOrderDetailByOrderIdAsync(int orderId)
    {
        return await context.OrderDetail
            .FirstOrDefaultAsync(od => od.OrderId == orderId);
    }
}