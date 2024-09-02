using Shared.StripePayments;

namespace Shared.Interfaces;

public interface IPaymentService
{
    Task<string> CreatePayment(PaymentRequest request);
}