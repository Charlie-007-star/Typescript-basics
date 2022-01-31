
 /* ----------------------------------Object & Array & Tuple & Enum & Any--------------------------------- */
enum Role { ADMIN = 'ADMIN', READ_ONLY = 0, AUTHOR = 5};

 var person:{
        name:string,
        age:number,
        hobbies:string[],
        role:Role
 } = {
    name: 'Sujin',
    age: 21,
    hobbies: ['Sports', 'Cooking'],
    role: Role.ADMIN
};

let favourite: string[];
favourite = ['music', "videos"];


for(const hobby of person.hobbies){
    console.log(hobby);
}

if(person.role === Role.ADMIN){
    console.log('Hello Admin');
}