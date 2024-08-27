namespace Shared.StripePayments;

public class StripeRequest
{
   // public List<CartItemDto> Products { get; set; }
   
   public string SuccessPaymentUrl { get; set; }

   public string CancelPaymentUrl { get; set; }

}