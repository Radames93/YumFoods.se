using Shared.Entities;
using Shared.Interfaces;

namespace API.Extensions
{
    public static class SubscriptionExtension
    {
        /// <summary>
        /// Maps the API endpoints for Subscription operations.
        /// Routes for fetching, adding, updating, retrieving orders by different parameters. 
        /// </summary>
        public static IEndpointRouteBuilder MapSubscriptionEndpoints(this IEndpointRouteBuilder app)
        {
            var group = app.MapGroup("/subs");

            group.MapGet("/", GetAllSubscriptionsAsync);

            group.MapGet("/{id}", GetSubscriptionByIdAsync);

            group.MapPost("/", PostSubscriptionAsync);

            group.MapPut("/{id}", PutSubscriptionAsync);

            group.MapDelete("/{id}", DeleteSubscriptionAsync);

            return app;

        }

        /// <summary>
        /// Get all the objects that is in the database
        /// </summary>
        /// <param name="repo">An instance of class SubscriptionRepository that provides methods for interacting with objects in the database. </param>
        /// <returns>A success code when the objects are successfully fetched. </returns>
        private static async Task<IResult> GetAllSubscriptionsAsync(ISubscriptionRepository<Subscription> repo)
        {
            var subs = await repo.GetAllSubscriptionsAsync();
            return Results.Ok(subs);
        }

        /// <summary>
        /// Get object by its ID number from the database
        /// </summary>
        /// <param name="repo">An instance of class SubscriptionRepository that provides methods for interacting with object in the database. </param>
        /// <param name="id">int ID of the object from the database</param>
        /// <returns>A success code when the object with the parameter is fetched. </returns>
        private static async Task<IResult> GetSubscriptionByIdAsync(ISubscriptionRepository<Subscription> repo, int id)
        {
            var sub = await repo.GetSubscriptionByIdAsync(id);
            return Results.Ok(sub);
        }

        /// <summary>
        /// Create a new object to the database. Validates that the new object does not already exist. 
        /// </summary>
        /// <param name="repo">An instance of class Repository that provides methods for interacting with object in the database. </param>
        /// <param name="newSub">Object to be added to the database. </param>
        /// <returns>Bad request if object added already exist or a success code if the object was added to the database successfully.</returns>
        private static async Task<IResult> PostSubscriptionAsync(ISubscriptionRepository<Subscription> repo, Subscription newSub)
        {
            var exisitngSub = await repo.GetSubscriptionByIdAsync(newSub.Id);
            if (exisitngSub is not null)
            {
                return null;
            }

            await repo.AddSubscriptionAsync(newSub);
            return Results.Ok(newSub);
        }

        /// <summary>
        /// Update an object from the database. Validates that the object exists. 
        /// </summary>
        /// <param name="repo">An instance of class ProductRepository that provides methods for interacting with object in the database. </param>
        /// <param name="id">int of object to be found in the database. </param>
        /// <param name="updatedSub">Object to be updated to the database. </param>
        /// <returns>Bad request if object does not already exist or a success code if the object was updated to the database successfully.</returns>
        private static async Task<IResult> PutSubscriptionAsync(ISubscriptionRepository<Subscription> repo, int id, Subscription updatedSub)
        {
            var existingSub = await repo.GetSubscriptionByIdAsync(id);
            if (existingSub is null)
            {
                return null;
            }

            await repo.UpdateSubscriptionAsync(updatedSub, id);
            return Results.Ok(updatedSub);
        }

        /// <summary>
        /// Deletes a object from the database
        /// </summary>
        /// <param name="repo">An instance of class Repository that provides methods for interacting with objects in the database. </param>
        /// <param name="id">Object with id number to be deleted </param>
        /// <returns>Success code if the object was deleted from the database successfully.</returns>
        private static async Task<IResult> DeleteSubscriptionAsync(ISubscriptionRepository<Subscription> repo, int id)
        {
            await repo.DeleteSubscriptionAsync(id);
            return Results.Ok();
        }
    }
}