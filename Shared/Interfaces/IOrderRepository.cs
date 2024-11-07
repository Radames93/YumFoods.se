using System.Threading.Tasks;
using System.Collections.Generic;

namespace Shared.Interfaces
{
    public interface IOrderRepository<T> where T : class
    {
        Task<List<T>> GetAllOrdersAsync();
        Task<T?> GetOrderByIdAsync(int id);
        Task AddOrderAsync(T newOrder, string customerEmail); // Updated signature
        Task DeleteOrderAsync(int id);
        // Other method signatures...
    }
}
