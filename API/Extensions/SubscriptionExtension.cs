using DataAccess.Entities;
<<<<<<< HEAD
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
namespace DataAccess.Repositories
=======
using DataAccess.Repositories;
using Shared.Interfaces;

namespace API.Extensions
>>>>>>> dev-Geweria
{
    public class SubscriptionRepository(YumFoodsDb context)
    {
        public async Task<List<Subscription>> GetAllSubscriptionsAsync()
        {
<<<<<<< HEAD
            return await context.Subscription.ToListAsync();
=======
            var group = app.MapGroup("/subs");

            group.MapGet("/", GetAllSubscriptionsAsync);

            group.MapGet("/{id}", GetSubscriptionByIdAsync);

            group.MapPost("/", PostSubscriptionAsync);

            group.MapPut("/{id}", PutSubscriptionAsync);

            group.MapDelete("/{id}", DeleteSubscriptionAsync);

            return app;

        }

        private static async Task<IResult> GetAllSubscriptionsAsync(ISubscriptionRepository repo)
        {
            var subs = await repo.GetAllSubscriptionsAsync();
            return Results.Ok(subs);
        }

        private static async Task<IResult> GetSubscriptionByIdAsync(ISubscriptionRepository repo, int id)
        {
            var sub = await repo.GetSubscriptionByIdAsync(id);
            return Results.Ok(sub);
        }

        private static async Task<IResult> PostSubscriptionAsync(ISubscriptionRepository repo, Subscription newSub)
        {
            var exisitngSub = await repo.GetSubscriptionByIdAsync(newSub.Id);
            if (exisitngSub is not null)
            {
                return null;
            }

            await repo.AddSubscriptionAsync(newSub);
            return Results.Ok(newSub);
        }

        private static async Task<IResult> PutSubscriptionAsync(ISubscriptionRepository repo, int id, Subscription updatedSub)
        {
            var existingSub = await repo.GetSubscriptionByIdAsync(id);
            if (existingSub is null)
            {
                return null;
            }

            await repo.UpdateSubscriptionAsync(updatedSub, id);
            return Results.Ok(updatedSub);
        }

        private static async Task<IResult> DeleteSubscriptionAsync(ISubscriptionRepository repo, int id)
        {
            await repo.DeleteSubscriptionAsync(id);
            return Results.Ok();
>>>>>>> dev-Geweria
        }
    }
}