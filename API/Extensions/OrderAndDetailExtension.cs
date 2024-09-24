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


            if (request != null)
            {
                var order = new Order
                {
                    //UserId = request.Order.UserId,
                    OrderDate = DateTime.UtcNow,
                    DeliveryDate = request.Order.DeliveryDate,
                    Total = request.Order.Total,
                    PaymentMethod = request.Order.PaymentMethod,
                    Quantity = request.Order.Quantity,
                    Products = request.Order.Products

                };

                var orderDetail = new OrderDetail
                {
                    Id = order.Id,
                    OrderId = order.Id,
                    DeliveryAdress = request.OrderDetail.DeliveryAdress,
                    DeliveryCity = request.OrderDetail.DeliveryCity,
                    DeliveryPostalCode = request.OrderDetail.DeliveryPostalCode,
                    DeliveryCountry = request.OrderDetail.DeliveryCountry
                };

                await orderRepository.AddOrderAsync(order);
                await detailRepository.AddOrderDetailAsync(orderDetail);
            }
            else
            {
                return Results.BadRequest($"Failed to create order");
            }
            return Results.Ok();

        }
    }
}
