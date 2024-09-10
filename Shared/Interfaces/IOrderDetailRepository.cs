namespace Shared.Interfaces;

public interface IOrderDetailRepository<T> where T : class
{
    Task<List<T>> GetAllOrderDetailsAsync();
    Task<T?> GetOrderDetailByIdAsync(int id);
    Task<T?> GetOrderDetailByOrderIdAsync(int orderId);
    Task AddOrderDetailAsync(T oD);
}