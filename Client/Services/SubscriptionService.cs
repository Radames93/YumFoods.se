using Shared.DTOs;
using Shared.Interfaces;

namespace Client.Services
{
    public class SubscriptionService : ISubscriptionRepository<SubscriptionDTO>
    {

        private readonly HttpClient _httpClient;

        public SubscriptionService(IHttpClientFactory factory)
        {
            _httpClient = factory.CreateClient("YumFoodsApiClient");
        }

        public async Task<List<SubscriptionDTO>> GetAllSubscriptionsAsync()
        {
            var response = await _httpClient.GetAsync("subs");
            if (!response.IsSuccessStatusCode)
            {
                return null;
            }

            var result = await response.Content.ReadFromJsonAsync<List<SubscriptionDTO>>();
            return result ?? new List<SubscriptionDTO>();
        }

        public async Task<SubscriptionDTO?> GetSubscriptionByIdAsync(int id)
        {
            var response = await _httpClient.GetAsync($"subs/{id}");
            if (!response.IsSuccessStatusCode)
            {
                return null;
            }

            var results = await response.Content.ReadFromJsonAsync<SubscriptionDTO>();
            return results;
        }

        public async Task AddSubscriptionAsync(SubscriptionDTO newSubscription)
        {
            var response = await _httpClient.PostAsJsonAsync($"subs", newSubscription);
            if (!response.IsSuccessStatusCode)
            {
                return;
            }
        }

        public async Task UpdateSubscriptionAsync(SubscriptionDTO updatedSub, int id)
        {
            var response = await _httpClient.GetAsync($"subs/{id}");
            if (!response.IsSuccessStatusCode)
            {
                return;
            }

            var result = await _httpClient.PutAsJsonAsync($"subs/{id}", updatedSub);
            if (result.IsSuccessStatusCode)
            {
                return;
            }
        }

        public async Task DeleteSubscriptionAsync(int id)
        {
            var response = await _httpClient.DeleteAsync($"subs/{id}");
            if (!response.IsSuccessStatusCode)
            {
                return;
            }
        }
    }
}
