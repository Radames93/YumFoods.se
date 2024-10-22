using Shared.DTOs;
using Shared.Interfaces;

namespace Shared.StripePayments;

//probably not needed class because this is implemented in frontend instead 20/09
public class PaymentDirectory(IPaymentService paymentService, ICartService cartService)
{
    private readonly IPaymentService _paymentService = paymentService;
    private readonly ICartService _cartService = cartService;


    public async Task<string> GoToPayment()
    {
        var paymentRequest = new PaymentRequest();
        paymentRequest.Products = new List<CartItemDto>(); //osäker om det ska vara new list
        paymentRequest.CancelPaymentUrl = "länk till rätt sida tyvärr gick ditt köp ej igenom";
        paymentRequest.SuccessPaymentUrl = "länk till orderbekräftelse";
        var checkoutUrl = await _paymentService.CreatePayment(paymentRequest);

        return checkoutUrl;
        //instansiera i frontend och await denna metod vid onClick
    }
}