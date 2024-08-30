namespace Shared.Interfaces;

public interface IOrderRepository<T> where T : class
{
    Task<List<T>> GetAllOrdersAsync();
    Task<T?> GetOrderByIdAsync(int id);
    Task AddOrderAsync(T newOrder);
    Task DeleteOrderAsync(int id);
}