function conflictError(message) {
    return {
        name: "ConflictError",
        message: message,
    };
}
function duplicatedEmailError(email) {
    return {
        name: "DuplicatedEmailError",
        message: "There is already an user with given email",
        email: email,
    };
}
function unauthorizedError() {
    return {
        name: "UnauthorizedError",
        message: "You must be signed in to continue",
    };
}
function notFoundError() {
    return {
        name: "NotFoundError",
        message: "No result for this search!",
    };
}
function invalidCredentialsError() {
    return {
        name: "InvalidCredentialsError",
        message: "Email or password are incorrect",
    };
}
export default {
    conflictError: conflictError,
    duplicatedEmailError: duplicatedEmailError,
    unauthorizedError: unauthorizedError,
    notFoundError: notFoundError,
    invalidCredentialsError: invalidCredentialsError,
};
