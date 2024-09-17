using Shared.StripePayments;

namespace API.Stripe;

public static class StripeExtension
{
    //kanske ta bort metod pga redan instansierad i program.cs
    public static void AddPaymentsApi(this IServiceCollection services, IConfiguration configuration )
    {
        services.AddOptions<StripeConfig>().BindConfiguration(nameof(StripeConfig));

        services.AddScoped<StripeClient>();
    }
    public static IEndpointRouteBuilder MapPaymentsEndPoints(this IEndpointRouteBuilder app)
    {
        var group = app.MapGroup("/payments");

        group.MapPost("/", CreatePaymentAsync);
        //group.MapPost("/webhooks");

        return app;
    }

    /// <summary>
    /// Creates a new payment session and returns a Stripe Checkout URL for the user to complete the payment.
    /// </summary>
    /// <param name="request">The payment request object containing payment details.</param>
    /// <param name="client">The Stripe client used to interact with the Stripe API for creating a payment session.</param>
    /// <returns>An interface that contains the response, which includes the URL to the Stripe Checkout page.</returns>
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