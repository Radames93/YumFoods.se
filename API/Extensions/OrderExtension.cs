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

        private static async Task GetAllOrdersAsync(HttpContext context)
        {
            throw new NotImplementedException();
        }

        private static async Task GetOrderByIdAsync(HttpContext context)
        {
            throw new NotImplementedException();
        }

        private static async Task PostOrderAsync(HttpContext context)
        {
            throw new NotImplementedException();
        }

        private static async Task DeleteOrderAsync(HttpContext context)
        {
            throw new NotImplementedException();
        }

    }

}
