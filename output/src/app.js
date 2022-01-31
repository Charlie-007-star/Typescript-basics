"use strict";
var user;
var username;
user = 'Max';
if (typeof user === 'string') {
    username = user;
}
function generateError(message, code) {
    throw {
        message: message,
        errorCode: code
    };
}
generateError("Error", 500);
