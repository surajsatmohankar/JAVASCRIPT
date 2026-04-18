
function sayMyName(){
    console.log("S");
    console.log("U");
    console.log("R");
    console.log("A");
    console.log("J");
}
//sayMyName();

function addTwoNumbers(nums1,nums2){    // here nums1 and nums2 are parameters
    return nums1 + nums2;   
    console.log("Suraj");
    
}   
const sum = addTwoNumbers(5, 18);  // here 5 and 18 are arguments
console.log("sum: ", sum);

// function loginUserMessage(username = "Kumar"){
//     if(!username ){
//         return "Please enter a username";
//     }
//     return `Hello ${username}, you are logged in Successfully`;
// }
// const message = loginUserMessage(); // here "Suraj" is an argument
// console.log(message);


function calculatecartPrice(val1, val2, ...prices){ // here ...prices is rest parameter which is used to represent an indefinite number of arguments as an array.
    return prices;
}

console.log(calculatecartPrice(200, 300, 400, 500));



const user = {
    username : "Suraj",
    price : 1000
}

function handleObject(anyObject){
    console.log(`username is ${anyObject.username} and price is ${anyObject.price}`);
    // return anyObject; // we can return any value from the function, it can be a string, number, boolean, object, array etc.
}

const ans = handleObject(user);
console.log("Function result:", ans); // undefined is returned because we are not returning anything from the function handleObject,
//  we are just logging the values inside the function. If we want to return something from the function, we have to use the return statement.

const myNewArray =  [100, 200, 300, 400, 500];

function returnSecondvalue(getArray){
    return getArray[4];
}

console.log(returnSecondvalue(myNewArray));
