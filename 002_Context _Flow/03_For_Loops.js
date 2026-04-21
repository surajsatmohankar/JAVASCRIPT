const arr = [1, 2, 3, 4, 5];

for(const num of arr){
    // console.log(`My number is ${num}`);
    
}


const greetings = "Hello World!";

for(const char of greetings){
    if(char === ' '){
        continue;     // continue; // it will skip the space and continue the loop and break; // it will stop the loop when it encounter space
    }
    // console.log(`My character is ${char} and count is ${greetings.indexOf(char)}`);
}

//MAP

const map = new Map();
map.set("IND", "India");
map.set("USA", "United States of America");
map.set("UK", "United Kingdom");

for(const [key, value] of map){
    // console.log(`key is ${key} ':-' ${value}`);
}

for(const key in map){
    console.log(`key is ${key} and value is ${map[key]}`); // it will give undefined because map is not iterable with for in loop    
}


// Object

const myObject ={
    name : "Suraj",
    age : 25,
    city : "Pune"
}


// for(const [key, value] of myObject){           // it will give error because object is not iterable but we can use for in loop to iterate object
//     console.log(`my key is ${key} and value is ${value}`);
// }

for(const key in myObject){    // it will give key and value of object
    // console.log(`my key is ${key} and value is ${myObject[key]}`);
}


//FOR-EACH
const coding = ["JavaScript", "Python", "Java", "C++"];

// coding.forEach(function (items){ // in callback function we can use items or element or anything it is just a parameter and callback function do not have any name it is just a function that is passed as an argument to another function
//      console.log(`I love ${items}`);
// })

// coding.forEach((item)=>{   // we can also use arrow function in forEach loop
//         console.log(`I love ${item}`);
// })

// function printMe(item){
//     console.log(`I love this ${item}`);
// }

// coding.forEach(printMe); // we can also pass function name in forEach loop without parenthesis because it is a callback function and it will be called by forEach loop when it is needed    

// coding.forEach((item, index, array)=>{ // in forEach loop we can also get index and array as a parameter in callback function
//     console.log(item, index, array);
    
// })

const myCodding =[
    {
        languagname : "JavaScript",
        languagfile : "js"
    },
    {
        languagname : "Ruby On rails",
        languagfile : "Rb"
    },
    {
        languagname : "Java",
        languagfile : "java"
    },
    
]

myCodding.forEach((item)=>{
    console.log(item.languagfile);
    
})