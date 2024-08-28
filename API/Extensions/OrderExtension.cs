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

            //group.MapGet("/{email}", GetOrderByEmailAsync);

            group.MapPost("/{id}", PostOrderAsync);

            group.MapDelete("/{id}", DeleteOrderAsync);

            return app;
        }

        private static Task<List<Order>> GetAllOrdersAsync(OrderRepository repo)
        {
            return repo.GetAllOrdersAsync();
        }

        private static Task GetOrderByIdAsync(OrderRepository repo, int id)
        {
            return repo.GetOrderByIdAsync(id);
        }

        //vänta med denna tills koppling till user db är set

        //private static Task GetOrderByEmailAsync(OrderRepository repo, string email)
        //{
        //    return repo.GetOrderByEmailAsync(email);
        //}

        private static Task PostOrderAsync(OrderRepository repo, Order newOrder)
        {
            return repo.AddOrderAsync(newOrder);
        }

        private static Task DeleteOrderAsync(OrderRepository repo, int id)
        {
            return repo.DeleteOrderAsync(id);
        }

    }

}
