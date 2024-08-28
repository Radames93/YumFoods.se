using Shared.StripePayments;
using Stripe;

namespace API.Stripe;

public static class StripeExtension
{
    public static void AddPaymentsApi(this IServiceCollection services, IConfiguration configuration )
    {
        services.AddOptions<StripeConfig>().BindConfiguration(nameof(StripeConfig));

        services.AddScoped<StripeClient>();
    }

    public static IEndpointRouteBuilder MapPeymentsEndPoints(this IEndpointRouteBuilder app)
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