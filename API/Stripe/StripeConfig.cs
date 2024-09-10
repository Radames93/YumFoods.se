namespace API.Stripe;

public class StripeConfig
{
    public string SecretKey { get; set; }
    public string TestKey { get; set; }
    //lägg till dessa som miljövariabel
    //eller hårdkorda i början för testning
}