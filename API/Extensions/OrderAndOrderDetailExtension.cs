using MySqlX.XDevAPI.Common;
using Shared.Entities;
using Shared.Interfaces;

namespace API.Extensions;

public static class OrderAndOrderDetailExtension
{
    public static IEndpointRouteBuilder MapOrderAndDetailsEndpoints(this IEndpointRouteBuilder app)
    {
        var group = app.MapGroup("/orderAndDetails");

        group.MapPost("/", CreateOrderAndDetailAsync);

        return app;
    }

    private static async Task<IResult> CreateOrderAndDetailAsync(IOrderRepository<Order> orderRepository,
        IOrderDetailRepository<OrderDetail> detailRepository, Order orderRequest, OrderDetail orderDetailRequest)
    {
        var order = new Order
        {
            Id = orderRequest.Id,
            UserId = orderRequest.UserId,
            OrderDate = DateTime.UtcNow,
            DeliveryDate = orderRequest.DeliveryDate,
            Total = orderRequest.Total,
            PaymentMethod = orderRequest.PaymentMethod,
            Products = orderRequest.Products
        };
        try
        {
            await orderRepository.AddOrderAsync(order);
        }
        catch (Exception)
        {
            return Results.BadRequest($"Failed to create order");
            throw;
        }

        var orderDetail = new OrderDetail
        {
            OrderId = order.Id,
            DeliveryAdress = orderDetailRequest.DeliveryAdress,
            DeliveryCity = orderDetailRequest.DeliveryCity,
            DeliveryPostalCode = orderDetailRequest.DeliveryPostalCode,
            DeliveryCountry = orderDetailRequest.DeliveryCountry
        };
        try
        {
            await detailRepository.AddOrderDetailAsync(orderDetail);
        }
        catch (Exception)
        {
            try
            {
                await orderRepository.DeleteOrderAsync(order.Id);
            }
            catch (Exception)
            {
                return Results.BadRequest($"Failed to create order detail and failed to rollback order.");
            }

            return Results.BadRequest($"Could not create order detail. Order rolled back.");
        }

        return Results.Ok(order.Id);
    }


}