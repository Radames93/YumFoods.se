using DataAccess.Repositories;
using Shared.Entities;
using Shared.Interfaces;

namespace API.Extensions;

public static class OrderDetailExtension
{
    public static IEndpointRouteBuilder MapOrderDetailEndpoints(this IEndpointRouteBuilder app)
    {
        var group = app.MapGroup("/orderdetail");

        group.MapGet("/", GetAllOrderDetailsAsync);
        group.MapGet("/{id}", GetOrderDetailByIdAsync);
        group.MapGet("/orderId/{id}", GetOrderDetailByOrderIdAsync);
        // eller group.MapGet("/{odId}/order/{orderId}", GetOrderDetailByOrderIdAsync);

        return app;
    }

    private static async Task<IResult> GetAllOrderDetailsAsync(IOrderDetailRepository repo)
    {
        var od = await repo.GetAllOrderDetailsAsync();
        return Results.Ok(od);
    }

    private static async Task<IResult> GetOrderDetailByIdAsync(IOrderDetailRepository repo, int id)
    {
        var od = await repo.GetOrderDetailByIdAsync(id);
        return Results.Ok(od);
    }

    private static async Task<IResult> GetOrderDetailByOrderIdAsync(IOrderDetailRepository repo, int orderId)
    {
        var od = await repo.GetOrderDetailByOrderIdAsync(orderId);
        if(od is null)
        {
            return Results.NotFound($"No Order Details found with order number {orderId}");
        }
        return Results.Ok(od);
    }
}