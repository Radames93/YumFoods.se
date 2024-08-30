using Shared.DTOs;
using Shared.Interfaces;

namespace Shared.StripePayments;

public class PaymentDirectory(IPaymentHttp paymentHttp)
{
    private readonly IPaymentHttp _paymentHttp = paymentHttp;

    public async Task<string> GoToPayment()
    {
        var paymentRequest = new PaymentRequest();
        paymentRequest.Products = new List<CartItemDto>(); //osäker om det ska vara new list
        paymentRequest.CancelPaymentUrl = "länk till rätt sida tyvärr gick ditt köp ej igenom";
        paymentRequest.SuccessPaymentUrl = "länk till orderbekräftelse";
        var checkoutUrl = await _paymentHttp.CreatePayment(paymentRequest);

        return checkoutUrl;
        //instansiera i frontend och await denna metod vid onClick
    }
}