using Shared.Entities;
using Shared.Interfaces;

namespace API.Extensions
{
    public static class PurchaseExtension
    {
        public static IEndpointRouteBuilder MapPurchaseEndpoints(this IEndpointRouteBuilder app)
        {
            var group = app.MapGroup("/purchase");

            group.MapPost("/", CreatePurchaseAsync);

            return app;
        }
        private static async Task<IResult> CreatePurchaseAsync(
            IOrderRepository<Order> orderRepo,
            IOrderDetailRepository<OrderDetail> orderDetailRepo,
            PurchaseRequest purchaseRequest)
        {
            // Create a new Order object from the purchaseRequest
            var newOrder = new Order
            {
                //UserId = purchaseRequest.UserId,
                OrderDate = DateTime.Now,
                DeliveryDate = DateTime.Now.AddDays(3),
                Products = purchaseRequest.Products,
                Quantity = purchaseRequest.Quantity,
                Total = purchaseRequest.Total
            };

            // Add the new order to the open database
            await orderRepo.AddOrderAsync(newOrder);

            // Create a new OrderDetail object from the purchaseRequest
            var newOrderDetail = new OrderDetail
            {
                OrderId = newOrder.Id, // Link to the newly created Order
                DeliveryAdress = purchaseRequest.DeliveryAddress,
                DeliveryCity = purchaseRequest.DeliveryCity,
                DeliveryPostalCode = purchaseRequest.DeliveryPostalCode,
                DeliveryCountry = purchaseRequest.DeliveryCountry
            };

            // Add the new order detail to the secure database
            await orderDetailRepo.AddOrderDetailAsync(newOrderDetail);

            return Results.Ok(new { Message = "Purchase completed successfully", OrderId = newOrder.Id });
        }
    }
}
