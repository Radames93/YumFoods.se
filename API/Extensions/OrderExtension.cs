<<<<<<< HEAD
﻿using DataAccess.Entities;
=======
﻿using Shared.Entities;
>>>>>>> dev-vivian-reverted
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

<<<<<<< HEAD
            group.MapPost("/{id}", PostOrderAsync);
=======
            //group.MapGet("/{email}", GetOrderByEmailAsync);

            group.MapPost("/", PostOrderAsync);
>>>>>>> dev-Geweria

            group.MapDelete("/{id}", DeleteOrderAsync);

            return app;
        }

<<<<<<< HEAD
<<<<<<< HEAD
        private static Task<IEnumerable<Order>> GetAllOrdersAsync(OrderRepository repo)
=======
        private static async Task<IResult> GetAllOrdersAsync(IOrderRepository repo)
>>>>>>> dev-Geweria
        {
            var orders = await repo.GetAllOrdersAsync();
            return Results.Ok(orders);
        }

<<<<<<< HEAD
        private static Task<Order?> GetOrderByIdAsync(OrderRepository repo)
=======
        private static async Task<List<Order>> GetAllOrdersAsync(IOrderRepository repo)
        {
            return await repo.GetAllOrdersAsync();
        }

        private static async Task<IResult> GetOrderByIdAsync(IOrderRepository repo, int id)
>>>>>>> dev-vivian-reverted
        {
            var prod = await repo.GetOrderByIdAsync(id);
            return Results.Ok(prod);
        }

        private static async Task<IResult> PostOrderAsync(IOrderRepository repo, Order newOrder)
        {
<<<<<<< HEAD
            throw new NotImplementedException();
=======
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
=======
            var order = await repo.GetOrderByIdAsync(newOrder.Id);
            if(order is not null)
            {
                return Results.BadRequest($"Product with id {order} already exists");
            }

            await repo.AddOrderAsync(newOrder);
            return Results.Ok();
           
>>>>>>> dev-vivian-reverted
        }

        private static async Task<IResult> DeleteOrderAsync(IOrderRepository repo, int id)
        {
            await repo.DeleteOrderAsync(id);
            return Results.Ok();
<<<<<<< HEAD
>>>>>>> dev-Geweria
=======
>>>>>>> dev-vivian-reverted
        }

    }

}
