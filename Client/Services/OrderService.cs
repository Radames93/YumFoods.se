using Shared.DTOs;
using Shared.Interfaces;

namespace Client.Services
{
    public class OrderService : IOrderRepository<OrderDTO> 
    {
        private readonly HttpClient _httpClient;

        public OrderService(IHttpClientFactory factory)
        {
            _httpClient = factory.CreateClient("YumFoodsApiClient");
        }

        public async Task<List<OrderDTO>> GetAllOrdersAsync()
        {
            var response = await _httpClient.GetAsync("orders");
            if (!response.IsSuccessStatusCode)
            {
                return null;
            }

            var result = await response.Content.ReadFromJsonAsync<List<OrderDTO>>();
            return result ?? new List<OrderDTO>();
        }

        public async Task<OrderDTO?> GetOrderByIdAsync(int id)
        {
            var response = await _httpClient.GetAsync($"orders/{id}");
            if (!response.IsSuccessStatusCode)
            {
                return null;
            }

            var result = await response.Content.ReadFromJsonAsync<OrderDTO>();
            return result;
        }

        public async Task AddOrderAsync(OrderDTO newOrder)
        {
            var response = await _httpClient.PostAsJsonAsync($"/orders", newOrder);
            if (!response.IsSuccessStatusCode)
            {
                return;
            }
        }

        public async Task DeleteOrderAsync(int id)
        {
            var response = await _httpClient.DeleteAsync($"/orders/{id}");
            if (!response.IsSuccessStatusCode)
            {
                return;
            }

        }
    }
}
