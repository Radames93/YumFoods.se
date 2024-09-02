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
        group.MapGet("/orderId/{OrderId}", GetOrderDetailByOrderIdAsync);
        // eller group.MapGet("/{odId}/order/{orderId}", GetOrderDetailByOrderIdAsync);

        group.MapPost("/", AddOrderDetailAsync);

        return app;
    }

    private static async Task<IResult> AddOrderDetailAsync(IOrderDetailRepository<OrderDetail> repo, OrderDetail newOD)
    {
        var existing = await repo.GetOrderDetailByIdAsync(newOD.Id);
        if (existing is not null)
        {
            return Results.BadRequest($"OrderDetail with number {newOD.Id} already exist.");
        }

        await repo.AddOrderDetailAsync(newOD);
        return Results.Ok("New Order Detail success.");
    }

    private static async Task<IResult> GetAllOrderDetailsAsync(IOrderDetailRepository<OrderDetail> repo)
    {
        var od = await repo.GetAllOrderDetailsAsync();
        return Results.Ok(od);
    }

    private static async Task<IResult> GetOrderDetailByIdAsync(IOrderDetailRepository<OrderDetail> repo, int id)
    {
        var od = await repo.GetOrderDetailByIdAsync(id);
        return Results.Ok(od);
    }

    private static async Task<IResult> GetOrderDetailByOrderIdAsync(IOrderDetailRepository<OrderDetail> repo, int orderId)
    {
        var od = await repo.GetOrderDetailByOrderIdAsync(orderId);
        if(od is null)
        {
            return Results.NotFound($"No Order Details found with order number {orderId}");
        }
        return Results.Ok(od);
    }
}