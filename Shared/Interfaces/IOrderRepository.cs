using Shared.Entities;

namespace Shared.Interfaces;

public interface IOrderRepository
{
    Task<List<Order>> GetAllOrdersAsync();
    Task<Order?> GetOrderByIdAsync(int id);
    Task AddOrderAsync(Order newOrder);
    Task DeleteOrderAsync(int id);
}