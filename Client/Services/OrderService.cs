using Shared.DTOs;
using Shared.Interfaces;

namespace Client.Services
{
    public class OrderService : IOrderRepository<OrderDTO> 
    {
        private readonly HttpClient _httpClient;

        public OrderService(IHttpClientFactory factory)
        {
            _httpClient = factory.CreateClient("YumFoodsConnectionString");
        }

        public async Task<List<OrderDTO>> GetAllOrdersAsync()
        {
            throw new NotImplementedException();
        }

        public async Task<OrderDTO?> GetOrderByIdAsync(int id)
        {
            throw new NotImplementedException();
        }

        public async Task AddOrderAsync(OrderDTO newOrder)
        {
            throw new NotImplementedException();
        }

        public async Task DeleteOrderAsync(int id)
        {
            throw new NotImplementedException();
        }
    }
}
