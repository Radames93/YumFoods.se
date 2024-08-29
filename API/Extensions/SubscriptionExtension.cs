using DataAccess.Entities;
using DataAccess.Repositories;
using Shared.Interfaces;

namespace API.Extensions
{
    public static class SubscriptionExtension
    {
        public static IEndpointRouteBuilder MapSubscriptionEndpoints(this IEndpointRouteBuilder app)
        {
            var group = app.MapGroup("/subs");

            group.MapGet("/", GetAllSubscriptionsAsync);

            group.MapGet("/{id}", GetSubscriptionByIdAsync);

            group.MapPost("/", PostSubscriptionAsync);

            group.MapPut("/", PutSubscriptionAsync);

            group.MapDelete("/{id}", DeleteSubcriptionAsync);

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
                return Results.NotFound();
            }

            await repo.UpdateSubscriptionAsync(updatedSub, id);
            return Results.Ok(updatedSub);
        }

        private static async Task<IResult> DeleteSubcriptionAsync(ISubscriptionRepository repo, int id)
        {
            await repo.DeleteSubscriptionAsync(id);
            return Results.Ok();
        }
    }
}
