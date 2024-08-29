using DataAccess.Entities;
using Microsoft.EntityFrameworkCore;
using Shared.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DataAccess.Repositories
{
    public class SubscriptionRepository(YumFoodsDb context) : ISubscriptionRepository
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
            var sub = new Subscription()
            {
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
