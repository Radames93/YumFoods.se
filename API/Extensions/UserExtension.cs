using DataAccess.Repositories;
using Shared.Entities;

namespace API.Extensions;

public static class UserExtension
{
    public static IEndpointRouteBuilder MapUserEndpoints(this IEndpointRouteBuilder app)
    {
        var group = app.MapGroup("/users"); // Fixa routes(?)

        group.MapGet("/", GetAllUsersAsync);
        group.MapGet("/{id}", GetUserByIdAsync);
        group.MapGet("/name/{name}", GetUserByNameAsync);
        group.MapGet("/email{email}", GetUserByEmailAsync);
        group.MapGet("/organization/{orgName}", GetUserByOrganizationNumberAsync);

        //group.MapGet("/login", LoginUserAsync);

        group.MapPost("/", AddUserAsync);

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
    private static async Task<IResult> GetUserByOrganizationNumberAsync(UserRepository repo, int organizationNumber)
    {
        var user = await repo.GetUserByOrganizationAsync(organizationNumber);
        return Results.Ok(user);
    }
    private static async Task<IResult> GetUserByEmailAsync(UserRepository repo, string name)
    {
        var user = await repo.GetUserByNameAsync(name);
        return Results.Ok(user);
    }

    //private static async Task<IResult> LoginUserAsync(AuthenticationService auth, string email, string password)
    //{
    //    var user = await auth.LoginUserAsync(email, password);
    //    return Results.Ok(user);
    //}

    // FIXA DESSA TVÅ UNDER

    private static async Task<IResult> AddUserAsync(UserRepository repo, User newUser)
    {
        var user = await repo.GetUserByIdAsync(newUser.Id);
        if (user is not null)
        {
            return Results.BadRequest($"User with {newUser.Id} already exists.");
        }

        await repo.AddUserAsync(newUser);
        return Results.Ok();
    }

    private static async Task<IResult> DeleteUserAsync(UserRepository repo, int id)
    {
        await repo.DeleteUserAsync(id);
        return Results.Ok();
    }
}
