using DataAccess.Repositories;
using Microsoft.AspNetCore.Builder;
using Shared.Entities;
using Shared.Interfaces;

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

        private static async Task<List<Order>> GetAllOrdersAsync(IOrderRepository repo)
        {
            return await repo.GetAllOrdersAsync();
        }

        private static async Task<IResult> GetOrderByIdAsync(IOrderRepository repo, int id)
        {
            var prod = await repo.GetOrderByIdAsync(id);
            return Results.Ok(prod);
        }

        private static async Task<IResult> PostOrderAsync(IOrderRepository repo, Order newOrder)
        {
            var order = await repo.GetOrderByIdAsync(newOrder.Id);
            if(order is not null)
            {
                return Results.BadRequest($"Product with id {order} already exists");
            }

            await repo.AddOrderAsync(newOrder);
            return Results.Ok();
           
        }

        private static async Task<IResult> DeleteOrderAsync(IOrderRepository repo, int id)
        {
            await repo.DeleteOrderAsync(id);
            return Results.Ok();
        }

    }

}
