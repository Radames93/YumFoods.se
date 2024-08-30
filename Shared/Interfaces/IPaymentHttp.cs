using Shared.StripePayments;

namespace Shared.Interfaces;

public interface IPaymentHttp
{
    Task<string> CreatePayment(PaymentRequest request);
}