using DataAccess.Entities;
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

            group.MapPost("/{id}", PostOrderAsync);

            group.MapDelete("/{id}", DeleteOrderAsync);

            return app;
        }

        private static Task<List<Order>> GetAllOrdersAsync(OrderRepository repo)
        {
            return repo.GetAllOrdersAsync();
        }

        private static Task<Order?> GetOrderByIdAsync(OrderRepository repo)
        {
            throw new NotImplementedException();
        }

        private static async Task PostOrderAsync(OrderRepository repo)
        {
            var prod = await repo.GetAllProductsAsync();
            return Results.Ok(prod);
        }

        private static async Task DeleteOrderAsync(OrderRepository repo)
        {
            throw new NotImplementedException();
        }

    }

}
