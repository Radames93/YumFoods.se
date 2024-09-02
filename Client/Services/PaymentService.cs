using Shared.Interfaces;
using Shared.StripePayments;

namespace Shared.Services;

public class PaymentService : IPaymentService
{
    private readonly HttpClient _httpClient;

    public PaymentService(HttpClient client)
    {
        _httpClient = client;
    }

    public async Task<string> CreatePayment(PaymentRequest request)
    {
        var response = await _httpClient.PostAsJsonAsync("/payments", request);

        if (!response.IsSuccessStatusCode)
        {
            return null;
        }

        var checkoutResponse = await response.Content.ReadFromJsonAsync<PaymentResponse>();
        return checkoutResponse?.CheckoutUrl;
    }
}