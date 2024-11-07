using DataAccess.Repositories;
using Microsoft.AspNetCore.Mvc;
using Shared;
using Shared.DTOs;
using Shared.Entities;

namespace API.Extensions;

public static class UserExtension
{
    public static IEndpointRouteBuilder MapUserEndpoints(this IEndpointRouteBuilder app)
    {
        var group = app.MapGroup("/users");

        group.MapGet("/", GetAllUsersAsync);
        group.MapGet("/{id}", GetUserByIdAsync);
        group.MapGet("/user/{name}", GetUserByNameAsync);
        group.MapGet("/email/{email}", GetUserByEmailAsync);
        group.MapGet("/org/{organization}", GetUserByOrganizationAsync);
        group.MapGet("/type/{email}", GetUserTypeByEmailAsync);

        group.MapPost("/", AddUserAsync);
        group.MapPost("/login", LoginUserAsync);

        group.MapPatch("/{id}", UpdateUserAsync);
        group.MapDelete("/{id}", DeleteUserAsync);

        return app;
    }

    private static async Task<IResult> GetAllUsersAsync([FromServices] UserRepository repo)
    {
        var users = await repo.GetAllUsersAsync();
        return Results.Ok(users);
    }

    private static async Task<IResult> GetUserByIdAsync([FromServices] UserRepository repo, int id)
    {
        var user = await repo.GetUserByIdAsync(id);
        return user is not null ? Results.Ok(user) : Results.NotFound("User not found.");
    }

    private static async Task<IResult> GetUserByNameAsync([FromServices] UserRepository repo, string name)
    {
        var user = await repo.GetUserByNameAsync(name);
        return user is not null ? Results.Ok(user) : Results.NotFound("User not found.");
    }

    private static async Task<IResult> GetUserByOrganizationAsync([FromServices] UserRepository repo, int orgNumber)
    {
        var user = await repo.GetUserByOrganizationAsync(orgNumber);
        return user is not null ? Results.Ok(user) : Results.NotFound("User not found.");
    }

    private static async Task<IResult> GetUserByEmailAsync([FromServices] UserRepository repo, string email)
    {
        var user = await repo.GetUserByEmailAsync(email);
        return user is not null ? Results.Ok(user) : Results.NotFound("User not found.");
    }

    private static async Task<IResult> GetUserTypeByEmailAsync([FromServices] UserRepository repo, string email)
    {
        var userType = await repo.GetUserTypeByEmailAsync(email);
        return userType is not null
            ? Results.Ok(new { Email = email, UserType = userType })
            : Results.NotFound("User not found or email is invalid.");
    }

    private static async Task<IResult> AddUserAsync([FromBody] User newUser, [FromServices] UserRepository repo)
    {
        if (newUser == null)
        {
            return Results.BadRequest("User data is required.");
        }

        var existingUser = await repo.GetUserByEmailAsync(newUser.Email);
        if (existingUser is not null)
        {
            return Results.BadRequest("User with this email already exists.");
        }

        await repo.AddUserAsync(newUser);
        return Results.Created($"/users/{newUser.Id}", newUser); // Return 201 Created
    }

    private static async Task<IResult> LoginUserAsync([FromServices] UserRepository repo, [FromServices] AuthenticationService auth, [FromBody] LoginModel login)
    {
        if (string.IsNullOrEmpty(login.Email) || string.IsNullOrEmpty(login.Password))
        {
            return Results.BadRequest("Email and password must be provided.");
        }

        var isValid = await repo.ValidateUserAsync(login);
        if (!isValid)
        {
            return Results.Unauthorized();
        }

        var user = await repo.GetUserByEmailAsync(login.Email);
        var token = auth.GenerateToken(user);

        return Results.Ok(new { Token = token });
    }

    private static async Task<IResult> UpdateUserAsync([FromBody] User newUser, [FromServices] UserRepository repo, int id)
    {
        var existingUser = await repo.GetUserByIdAsync(id);
        if (existingUser is null)
        {
            return Results.NotFound($"User with id {id} does not exist.");
        }

        await repo.UpdateUserAsync(id, newUser);
        return Results.Ok(newUser); // Return updated user details
    }

    private static async Task<IResult> DeleteUserAsync([FromServices] UserRepository repo, int id)
    {
        var existingUser = await repo.GetUserByIdAsync(id);
        if (existingUser is null)
        {
            return Results.NotFound($"User with id {id} does not exist.");
        }

        await repo.DeleteUserAsync(id);
        return Results.NoContent(); // Return 204 No Content
    }
}
