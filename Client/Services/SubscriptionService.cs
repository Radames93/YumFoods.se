using Shared.DTOs;
using Shared.Interfaces;

namespace Client.Services
{
    public class SubscriptionService : ISubscriptionRepository<SubscriptionDTO>
    {

        private readonly HttpClient _httpClient;

        public SubscriptionService(IHttpClientFactory factory)
        {
            _httpClient = factory.CreateClient("YumFoodsConnectionString");
        }

        public async Task<List<SubscriptionDTO>> GetAllSubscriptionsAsync()
        {
            throw new NotImplementedException();
        }

        public async Task<SubscriptionDTO?> GetSubscriptionByIdAsync(int id)
        {
            throw new NotImplementedException();
        }

        public async Task AddSubscriptionAsync(SubscriptionDTO newSubscription)
        {
            throw new NotImplementedException();
        }

        public async Task UpdateSubscriptionAsync(SubscriptionDTO updatedSub, int id)
        {
            throw new NotImplementedException();
        }

        public async Task DeleteSubscriptionAsync(int id)
        {
            throw new NotImplementedException();
        }
    }
}
