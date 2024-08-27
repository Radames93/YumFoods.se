namespace DataAccess.Security;

public class PasswordEncryption
{
    public string HashPassword(string password)
    {
        return BCrypt.Net.BCrypt.HashPassword(password);
    }
}
