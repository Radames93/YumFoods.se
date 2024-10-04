using DataAccess.Repositories;
using DataAccess.Security;
using Shared.Entities;

namespace API.Extensions;

public static class UserExtension
{
    public static IEndpointRouteBuilder MapUserEndpoints(this IEndpointRouteBuilder app)
    {
        var group = app.MapGroup("/users"); // Fixa routes(?)

        group.MapGet("/", GetAllUsersAsync);
        group.MapGet("/id/{id}", GetUserByIdAsync);
        group.MapGet("/username/{name}", GetUserByNameAsync);
        group.MapGet("/email/{email}", GetUserByEmailAsync);
        group.MapGet("/org/{organization}", GetUserByOrganizationAsync);


        group.MapPost("/", AddUserAsync);
        group.MapPost("/login", LoginUserAsync); // Adding login endpoint here

        group.MapDelete("/{id}", DeleteUserAsync);
        return app;
    }

    private static async Task<IResult> GetAllUsersAsync(UserRepository repo)
    {
        var user = await repo.GetAllUsersAsync();
        return Results.Ok(user);
    }
    private static async Task<IResult> GetUserByIdAsync(UserRepository repo, int id)
    {
        var user = await repo.GetUserByIdAsync(id);
        return Results.Ok(user);
    }
    private static async Task<IResult> GetUserByNameAsync(UserRepository repo, string name)
    {
        var user = await repo.GetUserByNameAsync(name);
        return Results.Ok(user);
    }
    private static async Task<IResult> GetUserByOrganizationAsync(UserRepository repo, int orgNumber)
    {
        var user = await repo.GetUserByOrganizationAsync(orgNumber);
        return Results.Ok(user);
    }
    private static async Task<IResult> GetUserByEmailAsync(UserRepository repo, string email)
    {
        var user = await repo.GetUserByEmailAsync(email);
        return Results.Ok(user);
    }

    private static async Task<IResult> AddUserAsync(UserRepository repo, User newUser)
    {
        var exisitngUser = await repo.GetUserByIdAsync(newUser.Id);
        if (exisitngUser is not null)
        {
            return null;
        }

        await repo.AddUserAsync(newUser);
        return Results.Ok(newUser);
    }

    private static async Task<IResult> LoginUserAsync(UserRepository repo, AuthenticationService auth, string email, string password)
    {
        var isValid = await repo.ValidateUserAsync(email, password);

        if (!isValid)
        {
            return Results.Unauthorized(); // Return Unauthorized if email or password is incorrect
        }

        var user = await repo.GetUserByEmailAsync(email);

        // Generate a JWT token or return user data (depends on your authentication approach)
        var token = auth.GenerateToken(user);

        return Results.Ok(new { Token = token });
    }

    private static async Task<IResult> DeleteUserAsync(UserRepository repo, int id)
    {
        await repo.DeleteUserAsync(id);
        return Results.Ok();
    }
}