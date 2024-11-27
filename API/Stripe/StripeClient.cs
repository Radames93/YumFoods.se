using Microsoft.Extensions.Options;
using Shared.StripePayments;
using Stripe;
using Stripe.Checkout;


namespace API.Stripe;

public class StripeClient
{
    private readonly StripeConfig _stripeConfig;

    private readonly ILogger<StripeClient> _logger;

    /// <summary>
    /// Initializes a new instance of the StripeConfig class.
    /// </summary>
    /// <param name="stripeConfig">The configuration settings for Stripe.></param>
    /// <param name="logger">The logger instance for logging messages>.</param>
    /// <remarks>
    /// This constructor sets the Stripe API key to the test key provided in the configuration settings.
    /// </remarks>
    public StripeClient(IOptions<StripeConfig> stripeConfig, ILogger<StripeClient> logger)
    {
        _stripeConfig = stripeConfig.Value;
        _logger = logger;

        StripeConfiguration.ApiKey = _stripeConfig.SecretKey;
    }

    /// <summary>
    /// Creates a Stripe Checkout session based on the provided payment request and returns the URL for the user to complete the payment.
    /// </summary>
    /// <param name="request">The payment request object containing details such as success and cancel URLs, and product information for the checkout session.</param>
    /// <returns>A string representing the URL of the Stripe Checkout session, where the user can complete their payment.</returns>
    public async Task<string> Checkout(PaymentRequest request)
    {
        var options = new SessionCreateOptions()
        {
            Mode = "payment",
            Currency = "sek",
            PaymentMethodTypes = new List<string>
            {
                "card",
                "klarna",
            },
            SuccessUrl = request.SuccessPaymentUrl,
            CancelUrl = request.CancelPaymentUrl,
        LineItems = request.Products.Select(product => new SessionLineItemOptions()
            {
                Quantity = product.Quantity,
                PriceData = new SessionLineItemPriceDataOptions()
                {
                    Currency = "sek",
                    UnitAmount = (long)(product.Price * 100),
                    ProductData = new SessionLineItemPriceDataProductDataOptions()
                    {
                        Name = product.Name
                    }
                }
            }).ToList(),
            // Add shipping options
            // Add shipping options
            ShippingOptions = new List<SessionShippingOptionOptions>
        {
            new SessionShippingOptionOptions
            {
                //ShippingRate = "shr_1QPPXWBS2XjiV4xQmSICOdoT" // Shipping rate test
                ShippingRate = "shr_1QPQzWBS2XjiV4xQnz40ygCX" // Shipping rate live
            }
        }
        };

        var checkoutSession = await new SessionService().CreateAsync(options);
        return checkoutSession.Url;
    }
}