//singleton - A singleton is a design pattern that restricts the instantiation of a class to a single instance and provides a global point of access to that instance. It is used when we want to ensure that only one instance of a class is created and that it is accessible from anywhere in the code.


const mySym = Symbol("key1");
const user = {
    name : "Suraj",
    age : 25,
    location : "india",
    [mySym] : "myValue", // symbol ko [] ke andar likhna padta hai, otherwise it will be treated as a string key.
    email : "suraj.sgandhi@gmail.com",
    isloggedIn : true,
    lastLoginDays : ["Monday", "Tuesday", "Wednesday"],
    score : [100, 200, 300],
    "full Name" : "Suraj Satmohankar",
    getScore : function(){
        return this.score;
    }
}

console.log(user);
console.log(user.isloggedIn, user.lastLoginDays);
console.log(user["full Name"]);


console.log("my user score:", user["score"]);
console.log(user[mySym]);

console.log(typeof mySym); // to access the value of the symbol key we have to use the square bracket notation and pass the symbol key as an argument.

// console.log(typeof user[mySym]);
// Object.freeze(user); // freeze method is used to prevent the modification of the object. It does not allow to add, delete or modify the properties of the object.
// user.email = "shweta@gmail.com";
console.log(user);


user.greeting = function(){
    console.log("Hello js users");    
}

user.greetingTwo = function(){
    console.log(`hello Js users, my name is ${this.name} and my email is ${this.email}`);
}

console.log(user.greeting());
console.log(user.greetingTwo());