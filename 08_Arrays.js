let myArr = [0,1,2,"Suraj", 7,9];
console.log(myArr);
// console.log(myArr[0]);
// console.log(myArr[3]);
// console.log(myArr.length);
// console.log(myArr[myArr.length - 1]);

myArr.push(8);
myArr.push("Satmohankar");
console.log(myArr); // push method adds the element at the end of the array.

myArr.pop(8); // it looks for the last element and removes it, it does not matter what value we pass in pop method.
console.log(myArr);

myArr.unshift(5); // unshift method adds the element at the beginning of the array and shifts all the other elements to the right.
console.log(myArr);

myArr.shift(); // shift method removes the first element of the array and shifts all the other elements to the left.
// console.log(myArr);

let newArr = myArr.join(); // join method converts the array into a string and it takes one parameter which is the separator. If we do not pass any parameter, it will use comma as a separator.
console.log(myArr);
console.log("new Array is " ,newArr);
console.log(typeof newArr);

// slice and splice method
console.log("A", myArr);


// slice method does not change the original array and it returns a new array with the selected elements.
const myn1 = myArr.slice(1,4);
console.log(myn1);
console.log("B", myArr);


// splice method changes the original array and it returns the removed elements. It takes two parameters, the first one is the index from where we want to start removing elements and the second one is the number of elements we want to remove.
console.log("C", myArr); 
let newArr1 = myArr.splice(1,4); // splice method changes the original array and it returns the removed elements. It takes two parameters, the first one is the index from where we want to start removing elements and the second one is the number of elements we want to remove.


console.log( newArr1); 
console.log("D", myArr); // splice method modify the original array and return it.


const Heroes = ["Superman", "Batman", "Spiderman", "Ironman", "Thor"];
const Villains = ["Joker", "Lex Luthor", "Green Goblin", "Thanos", "Loki"];

// Heroes.push(Villains);
// console.log("my new Heroes" , Heroes);

// console.log(Heroes[5][1]);

// const All_Heroes= Heroes.push(Villains);
// console.log(All_Heroes); // push method returns the new length of the array after adding the new element.

const All_Heroes1 = Heroes.concat(Villains); // concat method does not change the original array and it returns a new array with the combined elements of both arrays.
console.log("all elements in All_Heroes1:", All_Heroes1);
// console.log(Heroes); // concat method does not change the original array and it returns a new array with the combined elements of both arrays.


const All_Heroes2 = [...Heroes, ...Villains]; // spread operator is used to combine two arrays and it does not change the original array.
console.log(All_Heroes2);


const nested_Array  = [1,2,3,[4,5,6],7,[9,[10,"Mayur", "sweety", "Suraj"],11],12];

const simpleArray = nested_Array.flat(Infinity);// flat method is used to flatten the nested array and it takes one parameter which is the depth of the array. If we pass Infinity as a parameter, it will flatten the array completely.
console.log("this is simple array:", simpleArray);

console.log("finding Suraj ", Array.from("Suraj")); // Array.from() method creates a new array from an array-like or iterable object. In this case, we are passing a string "Suraj" which is an iterable object and it will create an array of characters from the string.
let score1 = [1,2,3,4,5];
let score2 = [6,7,8,9,10];
let score3 = ["Saniya", "Mayur", "Sweety", "Suraj"];
console.log("Array.of() method:", Array.of(score1, score2, score3)); // Array.of() method creates a new array from the given arguments. In this case, we are passing three arrays as arguments and it will create a new array with these three arrays as elements.
const new_Array = Array.of(score1, score2, score3);
console.log("Flattened array:", new_Array.flat(Infinity));
