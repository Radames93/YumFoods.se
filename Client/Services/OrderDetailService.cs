using Shared.DTOs;
using Shared.Interfaces;

namespace Client.Services;

public class OrderDetailService : IOrderDetailRepository<OrderDetailDTO>
{
    private readonly HttpClient _httpCLient;

    public OrderDetailService(IHttpClientFactory factory)
    {
        _client = factory.CreateClient("YumFoodsApiClient");
    }

    public async Task<List<OrderDetailDTO>> GetAllOrderDetailsAsync()
    {
        var response = await _httpCLient.GetAsync("orderdetail");
        if (!response.IsSuccessStatusCode)
        {
            return new List<OrderDetailDTO>();
        }

        var result = await response.Content.ReadFromJsonAsync<List<OrderDetailDTO>>();
        return result ?? new List<OrderDetailDTO>();
    }

    public async Task<OrderDetailDTO?> GetOrderDetailByIdAsync(int id)
    {
        var response = await _httpCLient.GetAsync($"orderdetail/{id}");
        if (!response.IsSuccessStatusCode)
        {
            return null;
        }

        var result = await response.Content.ReadFromJsonAsync<OrderDetailDTO>();
        return result;
    }

    public async Task<OrderDetailDTO?> GetOrderDetailByOrderIdAsync(int orderId)
    {
        var response = await _httpCLient.GetAsync($"orderdetail/orderId/{orderId}");
        if (!response.IsSuccessStatusCode)
        {
            return null;
        }

        var result = await response.Content.ReadFromJsonAsync<OrderDetailDTO>();
        return result;
    }

    public async Task AddOrderDetailAsync(OrderDetailDTO oD)
    {
        var response = await _httpCLient.PostAsJsonAsync("orderdetail", oD);
        if (!response.IsSuccessStatusCode)
        {
            return;
        }
    }
}