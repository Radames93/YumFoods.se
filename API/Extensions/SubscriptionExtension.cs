using DataAccess.Entities;
using DataAccess.Repositories;

namespace API.Extensions
{
    public static class SubscriptionExtension
    {
        public static IEndpointRouteBuilder MapSubscriptionEndpoints(this IEndpointRouteBuilder app)
        {
            var group = app.MapGroup("/subs");

            group.MapGet("/", GetAllSubscriptionsAsync);

            return app;

        }

        private static Task<List<Subscription>> GetAllSubscriptionsAsync(SubscriptionRepository repo)
        {
            return repo.GetAllSubscriptionsAsync();
        }
    }
}
