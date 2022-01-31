"use strict";
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
var favourite;
favourite = ['music', "videos"];
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby);
}
if (person.role === Role.ADMIN) {
    console.log('Hello Admin');
}
