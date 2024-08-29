using DataAccess.Entities;
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

            //group.MapGet("/{email}", GetOrderByEmailAsync);

            group.MapPost("/", PostOrderAsync);

            group.MapDelete("/{id}", DeleteOrderAsync);

            return app;
        }

        private static async Task<IResult> GetAllOrdersAsync(IOrderRepository repo)
        {
            var orders = await repo.GetAllOrdersAsync();
            return Results.Ok(orders);
        }

        private static async Task<IResult> GetOrderByIdAsync(IOrderRepository repo, int id)
        {
            var order = await repo.GetOrderByIdAsync(id);
            return Results.Ok(order);
        }

        //vänta med denna tills koppling till user db är set

        //private static Task GetOrderByEmailAsync(OrderRepository repo, string email)
        //{
        //    return repo.GetOrderByEmailAsync(email);
        //}

        private static async Task<IResult> PostOrderAsync(IOrderRepository repo, Order newOrder)
        {
            var exisitngOrder = await repo.GetOrderByIdAsync(newOrder.Id);
            if (exisitngOrder is not null)
            {
                return null;
            }

            await repo.AddOrderAsync(newOrder);
            return Results.Ok(newOrder);

        }
        private static async Task<IResult> DeleteOrderAsync(IOrderRepository repo, int id)
        {
            await repo.DeleteOrderAsync(id);
            return Results.Ok();
        }

    }

}
