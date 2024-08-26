using Microsoft.AspNetCore.Builder;

namespace API.Extensions
{
    public static class OrderExtension
    {
        public static IEndpointRouteBuilder MapOrderEndpoints(this IEndpointRouteBuilder app)
        {
            var group = app.MapGroup("/orders");

            group.MapGet("/", GetAllOrdersAsync);

            return app;
        }

        private static async Task GetAllOrdersAsync(HttpContext context)
        {
            throw new NotImplementedException();
        }
    }

}
