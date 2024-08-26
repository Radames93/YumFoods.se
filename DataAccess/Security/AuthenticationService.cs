using DataAccess.Repositories;

namespace DataAccess.Security;

public class AuthenticationService(UserRepository userRepository)
{
    public async Task<bool> LoginAsync(string username, string password)
    {
        // Validate the user's credentials
        bool isValidUser = await userRepository.ValidateUserAsync(username, password);

        if (isValidUser)
        {
            // Handle successful login
            return true;
        }
        else
        {
            // Handle failed login
            return false;
        }
    }
}
