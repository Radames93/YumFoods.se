using Microsoft.EntityFrameworkCore;
using Shared.Entities;
using Shared.Interfaces;


namespace DataAccess.Repositories
{
    public class SubscriptionRepository(YumFoodsDb context) : ISubscriptionRepository<Subscription>
    {
        public async Task<List<Subscription>> GetAllSubscriptionsAsync()
        {
            return await context.Subscription.ToListAsync();
        }

        public async Task<Subscription?> GetSubscriptionByIdAsync(int id)
        {
            return await context.Subscription.FindAsync(id);
        }
        public async Task AddSubscriptionAsync(Subscription newSub)
        {
            var maxId = await context.Subscription
                .MaxAsync(o => (int?)o.Id);

            var newId = (maxId ?? 0) + 1;

            var sub = new Subscription()
            {
                Id = newId,
                Title = newSub.Title,
                ImgRef = newSub.ImgRef,
                Price = newSub.Price
            };

            await context.Subscription.AddAsync(sub);
            await context.SaveChangesAsync();

        }
        public async Task UpdateSubscriptionAsync(Subscription updatedSub, int id)
        {
            var oldSub = await context.Subscription.FindAsync(id);
            if (oldSub is null)
            {
                return;
            }

            oldSub.Title = updatedSub.Title;
            oldSub.ImgRef = updatedSub.ImgRef;
            oldSub.Price = updatedSub.Price;

            await context.SaveChangesAsync();
        }

        public async Task DeleteSubscriptionAsync(int id)
        {
            var sub = await context.Subscription.FindAsync(id);
            if (sub is null)
            {
                return;
            }

            context.Subscription.Remove(sub);
            await context.SaveChangesAsync();
        }
    }
}