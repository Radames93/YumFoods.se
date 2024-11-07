using DataAccess.Repositories;
using Microsoft.AspNetCore.Mvc;
using Shared.Entities;
using Shared.Interfaces;

namespace API.Extensions
{
    public static class OrderExtension
    {
        /// <summary>
        /// Maps the API endpoints for Order operations.
        /// </summary>
        public static IEndpointRouteBuilder MapOrderEndpoints(this IEndpointRouteBuilder app)
        {
            var group = app.MapGroup("/orders");

            group.MapGet("/", GetAllOrdersAsync);
            group.MapGet("/{id:int}", GetOrderByIdAsync);
            group.MapGet("/userId/{userId:int}", GetOrdersByUserIdAsync);
            group.MapPost("/", PostOrderAsync);
            group.MapPost("/notify/customerEmail/{customerEmail}", NotifyOrderAsync);
            group.MapDelete("/{id:int}", DeleteOrderAsync);

            return app;
        }

        private static async Task<IResult> GetAllOrdersAsync([FromServices] IOrderRepository<Order> repo)
        {
            var orders = await repo.GetAllOrdersAsync();
            return Results.Ok(orders);
        }

        private static async Task<IResult> GetOrderByIdAsync([FromServices] IOrderRepository<Order> repo, int id)
        {
            var order = await repo.GetOrderByIdAsync(id);
            return order is not null ? Results.Ok(order) : Results.NotFound($"Order with ID {id} not found.");
        }

        private static async Task<IResult> GetOrdersByUserIdAsync([FromServices] OrderWithDetailsRepository repo, int userId)
        {
            var purchase = await repo.GetOrdersByUserIdAsync(userId);
            return purchase is not null ? Results.Ok(purchase) : Results.NotFound($"Orders for user ID {userId} not found.");
        }

        private static async Task<IResult> PostOrderAsync([FromServices] IOrderRepository<Order> repo, [FromBody] Order newOrder, [FromQuery] string customerEmail)
        {
            if (newOrder is null || string.IsNullOrWhiteSpace(customerEmail))
            {
                return Results.BadRequest("Order data or customer email is missing.");
            }

            var existingOrder = await repo.GetOrderByIdAsync(newOrder.Id);
            if (existingOrder is not null)
            {
                return Results.Conflict("Order with this ID already exists.");
            }

            await repo.AddOrderAsync(newOrder, customerEmail);
            return Results.Created($"/orders/{newOrder.Id}", newOrder);
        }

        private static async Task<IResult> DeleteOrderAsync([FromServices] IOrderRepository<Order> repo, int id)
        {
            var existingOrder = await repo.GetOrderByIdAsync(id);
            if (existingOrder is null)
            {
                return Results.NotFound($"Order with ID {id} does not exist.");
            }

            await repo.DeleteOrderAsync(id);
            return Results.NoContent();
        }

        private static async Task<IResult> NotifyOrderAsync([FromServices] LogicApp logicApp, [FromBody] Order newOrder, string customerEmail)
        {
            if (newOrder == null || string.IsNullOrWhiteSpace(customerEmail))
            {
                return Results.BadRequest("Order data or customer email is missing.");
            }

            await logicApp.NotifyOrderPlacedAsync(newOrder, customerEmail);
            return Results.Ok("Order notification sent successfully.");
        }
    }
}
