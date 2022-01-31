/* ------------------------------ Unknown type & Never type ------------------------------ */

let user: unknown;
let username: string;

user = 'Max';

if(typeof user === 'string'){
    username = user;
}


function generateError(message: string,code: number): never{
    throw {
        message: message,
        errorCode: code
    };
}

generateError("Error", 500);

