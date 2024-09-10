using Microsoft.EntityFrameworkCore;
using Shared.Entities;
using Shared.Interfaces;


namespace DataAccess.Repositories
{
    public class SubscriptionRepository(YumFoodsDb context) : ISubscriptionRepository<Subscription>
    {
        /// <summary>
        /// Gives a list of all subscriptions.
        /// </summary>
        /// <returns>The list of all the subscriptions form the database.</returns>
        public async Task<List<Subscription>> GetAllSubscriptionsAsync()
        {
            return await context.Subscription.ToListAsync();
        }

        /// <summary>
        /// Gives a subscription with a specific id.
        /// </summary>
        /// <param name="id">The id of the subscription.</param>
        /// <returns>The subscription with the matching id.</returns>
        public async Task<Subscription?> GetSubscriptionByIdAsync(int id)
        {
            return await context.Subscription.FindAsync(id);
        }

        /// <summary>
        /// Adds a new object into the database.
        /// </summary>
        /// <param name="newSub">The object newSub.</param>
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

        /// <summary>
        /// Updates an already existing subscription in the database.
        /// </summary>
        /// <param name="id">The id of the subscription.</param>
        /// <param name="updatedSub">The first integer.</param>
        /// <returns>The sum of the two integers.</returns>
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

        /// <summary>
        /// Deletes a subscription from the database.
        /// </summary>
        /// <param name="id">The id of the subscription.</param>
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