using DataAccess.Repositories;
using Shared.Entities;

namespace API.Extensions;

public static class UserExtension
{
    public static IEndpointRouteBuilder MapUserEndpoints(this IEndpointRouteBuilder app)
    {
        var group = app.MapGroup("/users");

        group.MapGet("/", GetAllUsersAsync);
        group.MapGet("/{id}", GetUserByIdAsync);
        group.MapGet("/name/{name}", GetUserByLastNameAsync);
        group.MapGet("/email/{email}", GetUserByEmailAsync);
        group.MapGet("/organization/{orgNumber}", GetUserByOrganizationNumberAsync);

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
    private static async Task<IResult> GetUserByLastNameAsync(UserRepository repo, string name)
    {
        var user = await repo.GetUserByLastNameAsync(name);
        return Results.Ok(user);
    }
    private static async Task<IResult> GetUserByOrganizationNumberAsync(UserRepository repo, int orgNumber)
    {
        var user = await repo.GetUserByOrganizationAsync(orgNumber);
        return Results.Ok(user);
    }
    private static async Task<IResult> GetUserByEmailAsync(UserRepository repo, string email)
    {
        var user = await repo.GetUserByEmailAsync(email);
        return Results.Ok(user);
    }

    //private static async Task<IResult> LoginUserAsync(AuthenticationService auth, string email, string password)
    //{
    //    var user = await auth.LoginUserAsync(email, password);
    //    return Results.Ok(user);
    //}

    private static async Task<IResult> AddUserAsync(OrderWithDetailsRepository repo, UserRepository repo2, User newUser)
    {
        var user = await repo2.GetUserByIdAsync(newUser.Id);
        if (user is not null)
        {
            return Results.BadRequest($"User with {newUser.Id} already exists.");
        }
        await repo.AddUserAsync(newUser);
        return Results.Ok(user);
    }

    private static async Task<IResult> DeleteUserAsync(UserRepository repo, int id)
    {
        await repo.DeleteUserAsync(id);
        return Results.Ok();
    }
}
