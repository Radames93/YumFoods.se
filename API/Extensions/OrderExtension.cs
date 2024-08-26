using DataAccess.Repositories;
using Microsoft.AspNetCore.Builder;

namespace API.Extensions
{
    public static class OrderExtension
    {
        public static IEndpointRouteBuilder MapOrderEndpoints(this IEndpointRouteBuilder app)
        {
            var group = app.MapGroup("/orders");

            group.MapGet("/", GetAllOrdersAsync);

            group.MapGet("/{id}", GetOrderByIdAsync);

            return app;
        }

        private static async Task<IResult> GetAllOrdersAsync(OrderRepository repo)
        {
            var prod = await repo.GetAllProductsAsync();
            return Results.Ok(prod);
        }

        private static async Task GetOrderByIdAsync(HttpContext context)
        {
            throw new NotImplementedException();
        }
    }

}
