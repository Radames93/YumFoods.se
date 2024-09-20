using Microsoft.AspNetCore.Mvc;
using Shared.Entities;
using Shared.Interfaces;

namespace API.Extensions
{
    public static class OrderAndDetailExtension
    {
        public static IEndpointRouteBuilder MapOrderAndDetailEndpoints(this IEndpointRouteBuilder app)
        {
            var group = app.MapGroup("/orderAndDetail");

            group.MapPost("/", CreateOrderAndDetailAsync);

            return app;
        }

        private static async Task<IResult> CreateOrderAndDetailAsync(IOrderRepository<Order> orderRepository,
            IOrderDetailRepository<OrderDetail> detailRepository, [FromBody] OrderAndDetail request)
        {
            var order = new Order
            {
                Id = request.Order.Id,
                UserId = request.Order.UserId,
                OrderDate = DateTime.UtcNow,
                DeliveryDate = request.Order.DeliveryDate,
                Total = request.Order.Total,
                PaymentMethod = request.Order.PaymentMethod,
                Products = request.Order.Products
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
                DeliveryAdress = request.OrderDetail.DeliveryAdress,
                DeliveryCity = request.OrderDetail.DeliveryCity,
                DeliveryPostalCode = request.OrderDetail.DeliveryPostalCode,
                DeliveryCountry = request.OrderDetail.DeliveryCountry
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
}
