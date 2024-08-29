using Microsoft.EntityFrameworkCore;
using Shared.Entities;

namespace DataAccess.Repositories
{
    public class SubscriptionRepository(YumFoodsDb context)
    {
        public async Task<List<Subscription>> GetAllSubscriptionsAsync()
        {
            return await context.Subscription.ToListAsync();
        }
    }
}
