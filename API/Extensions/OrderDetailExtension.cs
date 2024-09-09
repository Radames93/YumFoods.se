using Shared.Entities;
using Shared.Interfaces;

namespace API.Extensions;

public static class OrderDetailExtension
{
    /// <summary>
    /// Maps the API endpoints for OrderDetail operations.
    /// Routes for fetching, adding, retrieving order details by different parameters. 
    /// </summary>
    
   
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

    /// <summary>
    /// Create a new OrderDetail to the database when an order is placed. Validates that the newOD does not already exist. 
    /// </summary>
    /// <param name="repo">An instance of class OrderDetailRepository that provides methods for interacting with order details in the database. </param>
    /// <param name="newOD">Object to be added to the database</param>
    /// <returns>Bad request if object added already exist or a success message if the object was added successfully.</returns>
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
    /// <summary>
    /// Get all the Order Details in the database
    /// </summary>
    /// <param name="repo">An instance of class OrderDetailRepository that provides methods for interacting with order details in the database. </param>
    /// <returns>A success code when the order details are successfully fetched. </returns>
    private static async Task<IResult> GetAllOrderDetailsAsync(IOrderDetailRepository<OrderDetail> repo)
    {
        var od = await repo.GetAllOrderDetailsAsync();
        return Results.Ok(od);
    }
    /// <summary>
    /// Get Order Detail by its ID from the database
    /// </summary>
    /// <param name="repo">An instance of class OrderDetailRepository that provides methods for interacting with order details in the database. </param>
    /// <param name="id">Id-number of the object from the database</param>
    /// <returns>A success code when the order detail with the id-number is found</returns>
    private static async Task<IResult> GetOrderDetailByIdAsync(IOrderDetailRepository<OrderDetail> repo, int id)
    {
        var od = await repo.GetOrderDetailByIdAsync(id);
        return Results.Ok(od);
    }

    /// <summary>
    /// Get Order Detail with a specific order number 
    /// </summary>
    /// <param name="repo">An instance of class OrderDetailRepository that provides methods for interacting with order details in the database. </param>
    /// <param name="orderId">Number of the orderID of the object from the database</param>
    /// <returns>Bad request if object with the orderID is not found and a success code when the order detail with the order id-number is found</returns>
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