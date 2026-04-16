//const tinderUser = new Object();
const tinderUser = {};

tinderUser.id = 123;
tinderUser.name = "Suraj";
tinderUser.isLoggedIn = false;
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

const obj4 = {...obj1, ...obj2, ...obj3}; // spread operator is used to copy the values of all enumerable own properties from one or more source objects to a target object. It returns the target object.
console.log(obj4);
