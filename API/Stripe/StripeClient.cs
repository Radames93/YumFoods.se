using Microsoft.Extensions.Options;
using Shared.StripePayments;
using Stripe;
using Stripe.Checkout;


namespace API.Stripe;

public class StripeClient
{
    private readonly StripeConfig _stripeConfig;

    private readonly ILogger<StripeClient> _logger;

    public StripeClient(IOptions<StripeConfig> stripeConfig, ILogger<StripeClient> logger)
    {
        _stripeConfig = stripeConfig.Value;
        _logger = logger;

        StripeConfiguration.ApiKey = _stripeConfig.TestKey;
    }

    public async Task<string> Checkout(PaymentRequest request)
    {
        var options = new SessionCreateOptions()
        {
            Mode = "payment",
            Currency = "sek",
            PaymentMethodTypes = new List<string>
            {
                "card",
            },
            SuccessUrl = request.SuccessPaymentUrl,
            CancelUrl = request.CancelPaymentUrl,
            LineItems = request.Products.Select(product => new SessionLineItemOptions()
            {
                Quantity = product.Quantity,
                PriceData = new SessionLineItemPriceDataOptions()
                {
                    Currency = "sek",
                    UnitAmount = (long)Math.Round(product.Price) * 100,
                    ProductData = new SessionLineItemPriceDataProductDataOptions()
                    {
                        Name = product.Name
                    }

                }
            }).ToList()
        };

        var checkoutSession = await new SessionService().CreateAsync(options);
        return checkoutSession.Url;
    }
}