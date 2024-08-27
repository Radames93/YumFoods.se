using Microsoft.Extensions.Options;
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

        StripeConfiguration.ApiKey = _stripeConfig.SecretKey;
    }

    public async Task<string> Checkout(StripeRequest request)
    {
        Console.WriteLine("hej");
        return String.Empty;

        var options = new SessionCreateOptions()
        {
            Mode = "payment",
            Currency = "sek",
            PaymentMethodTypes = new List<string>
            {
                "card",
                "swish",
                "klarna",
                "paypal"
            },


        };
    }
}