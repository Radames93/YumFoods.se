using DataAccess.Repositories;
using Shared.Entities;

namespace API.Extensions;

public static class OrderDetailExtension
{
    public static IEndpointRouteBuilder MapProductEndpoints(this IEndpointRouteBuilder app)
    {
        var group = app.MapGroup("/orderdetail");

        group.MapGet("/", GetAllOrderDetailsAsync);
        group.MapGet("/{id}", GetOrderDetailByIdAsync);
        group.MapGet("/orderId/{id}", GetOrderDetailByOrderIdAsync);

        return app;
    }

    private static async Task<IResult> GetAllOrderDetailsAsync(OrderDetailRepository repo)
    {
        var od = await repo.GetAllOrderDetailsAsync();
        return Results.Ok(od);
    }

    private static async Task<IResult> GetOrderDetailByIdAsync(OrderDetailRepository repo, int id)
    {
        var od = await repo.GetOrderDetailByIdAsync(id);
        return Results.Ok(od);
    }

    private static async Task<IResult> GetOrderDetailByOrderIdAsync(OrderDetailRepository repo, int odId, int orderId)
    {
        var od = await repo.GetOrderDetailByOrderIdAsync(odId, orderId);
        if(od is null)
        {
            return Results.BadRequest($"Order with id {od} does not exist");
        }
        return Results.Ok(od);
    }
}