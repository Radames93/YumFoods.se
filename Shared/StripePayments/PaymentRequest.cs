using Shared.DTOs;

namespace Shared.StripePayments;

public class PaymentRequest
{ 
    public List<CartItemDto> Products { get; set; }
   
   public string SuccessPaymentUrl { get; set; }

   public string CancelPaymentUrl { get; set; }

}