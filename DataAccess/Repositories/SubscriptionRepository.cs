using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
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
