using Shared.StripePayments;

namespace API.Stripe;

public static class StripeExtension
{
    //kanske ta bort metod pga redan instansierad i program.cs
    public static void AddPaymentsApi(this IServiceCollection services, IConfiguration configuration )
    {
        services.AddOptions<StripeConfig>().BindConfiguration(nameof(StripeConfig));

        services.AddScoped<StripeClient>();
        Console.WriteLine("hej");
    }

    public static IEndpointRouteBuilder MapPaymentsEndPoints(this IEndpointRouteBuilder app)
    {
        var group = app.MapGroup("/payments");

        group.MapPost("/", CreatePaymentAsync);

        return app;
    }

    private static async Task<IResult> CreatePaymentAsync(PaymentRequest request, StripeClient client)
    {
        var checkoutUrl = await client.Checkout(request);

        var ok = new PaymentResponse()
        {
            CheckoutUrl = checkoutUrl
        };
        return Results.Ok(ok);
    }
}