"use strict";
/* ----------------------------------Object & Array & Tuple & Enum & Any--------------------------------- */
var Role;
(function (Role) {
    Role["ADMIN"] = "ADMIN";
    Role[Role["READ_ONLY"] = 0] = "READ_ONLY";
    Role[Role["AUTHOR"] = 5] = "AUTHOR";
})(Role || (Role = {}));
;
var person = {
    name: 'Sujin',
    age: 21,
    hobbies: ['Sports', 'Cooking'],
    role: Role.ADMIN
};
let favourite;
favourite = ['music', "videos"];
for (const hobby of person.hobbies) {
    console.log(hobby);
}
if (person.role === Role.ADMIN) {
    console.log('Hello Admin');
}
