//const tinderUser = new Object();
const tinderUser = {};

tinderUser.id = 123;
tinderUser.name = "Suraj";
tinderUser.isLoggedIn = true;
tinderUser.isSuccessful = true;

console.log(tinderUser);

const regularUser = {
    email : "jasmin@gmail.com",
    fullName : {
        userFullname : {
            firstName : "Jasmin",
            lastName : "Gandhi",
            friends : {
                friendName : "Shweta",
                friendName2 : "Satyarth"
            }
        }
    }
}

console.log(regularUser);
console.log(regularUser.fullName.userFullname.firstName);

console.log(regularUser.fullName.userFullname.friends.friendName2);


const obj1 = {1: "A", 2: "B", 3: "C"};
const obj2 = {4: "D", 5: "E", 6: "F"};

const obj3 = {5: "E", 6: "F", 7: "G"};
// const obj4 = Object.assign({}, obj1, obj2, obj3); // Object.assign() method is used to copy the values of all enumerable own properties from one or more source objects to a target object. It returns the target object.
// console.log(obj4);

const obj4 = {8: "H", 9: "I", 10: "J"};

const obj5 = {...obj1, ...obj2, ...obj3, ...obj4}; // spread operator is used to copy the values of all enumerable own properties from one or more source objects to a target object. It returns the target object.
// console.log(obj5);

// console.log(tinderUser);
// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

console.log(Object.hasOwnProperty.call(tinderUser, "isSuccessful")); // Object.hasOwnProperty() method returns a boolean indicating whether the object has the specified property as its own property (as opposed to inheriting it). It returns true if the object has the specified property, and false otherwise.

const course = {
    courseName : "JavaScript",
    courseDuration : "3 months",
    courseInstructor : "Suraj"
}

console.log(course.courseName);
// console.log(course["courseInstructor"]);

const {courseDuration} = course; // destructuring assignment is a syntax that allows you to unpack values from arrays, or properties from objects, into distinct variables.
console.log(courseDuration);
