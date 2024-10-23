using Shared.Entities;
using DataAccess.Repositories;
using DataAccess;
using Microsoft.EntityFrameworkCore;
using Shared.DTOs;
using Shared.Enums;

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
            OrderWithDetailsRepository repo,
            YumFoodsDb productDb,  // Assuming this is the DbContext for products
            PurchaseRequest purchaseRequest)
        {
            var deliverySlots = new List<string> { "10:00-12:00", "12:00-14:00", "14:00-16:00", "16:00-18:00" };
            if (!deliverySlots.Contains(purchaseRequest.DeliveryTime))
            {
                return Results.BadRequest();
            }

            // Fetch existing products from the database using Product IDs in the request
            var productIds = purchaseRequest.Products.Select(p => p.Id).ToList();
            var existingProducts = await productDb.Product
                                                  .Where(p => productIds.Contains(p.Id))
                                                  .ToListAsync();

            // Check if all requested products exist
            if (existingProducts.Count != productIds.Count)
            {
                return Results.BadRequest("One or more products in the order do not exist.");
            }

            // Create a new Order using existing products from the database
            var newOrder = new Order
            {
                UserId = purchaseRequest.UserId,
                OrderDate = purchaseRequest.OrderDate,
                DeliveryDate = purchaseRequest.DeliveryDate,
                DeliveryTime = purchaseRequest.DeliveryTime,
                Products = existingProducts, // Use the fetched existing products
                Quantity = purchaseRequest.Quantity,
                Total = purchaseRequest.Total,
                Floor = purchaseRequest.Floor,
                PortCode = purchaseRequest.PortCode
            };

            // Create a new OrderDetail from the purchaseRequest
            var newOrderDetail = new OrderDetail
            {
                DeliveryAddress = purchaseRequest.DeliveryAddress,
                DeliveryCity = purchaseRequest.DeliveryCity,
                DeliveryPostalCode = purchaseRequest.DeliveryPostalCode,
                DeliveryCountry = purchaseRequest.DeliveryCountry
            };

            // Call the method to add both order and order detail
            await repo.AddOrderAndDetailsAsync(newOrder, newOrderDetail, purchaseRequest.UserId);

            return Results.Ok(new { Message = "Purchase completed successfully", OrderId = newOrder.Id });
        }

    }
}
