namespace Shared.Interfaces;

public interface ISubscriptionRepository<T> where T : class
{
    Task<List<T>> GetAllSubscriptionsAsync();
    Task<T?> GetSubscriptionByIdAsync(int id);
    Task AddSubscriptionAsync(T newSubscription);
    Task UpdateSubscriptionAsync(T updatedSub, int id);
    Task DeleteSubscriptionAsync(int id);
}