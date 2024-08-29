using Shared.Entities;

namespace Shared.Interfaces;

public interface IOrderDetailRepository
{
    Task<List<OrderDetail?>> GetAllOrderDetailsAsync();
    Task<OrderDetail?> GetOrderDetailByIdAsync(int id);
    Task<OrderDetail?> GetOrderDetailByOrderIdAsync(int orderId);
}