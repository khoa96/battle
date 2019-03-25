import Request from './Request';

// get profile cua user.
export const getProfile = (username) => {
    return Request.get({
        url: "users/"+username
    });
}