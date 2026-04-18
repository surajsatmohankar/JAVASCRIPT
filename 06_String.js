const name = "Suraj"
const repoCount = 100;

// console.log(name +" "+ repoCount + " value");
// console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);


const gameName = new String('Suraj-Satmohankar-America'); // string is a primitive data type but when we use new String() it creates an object of string and it has some properties and methods which we can use to manipulate the string.
// console.log(gameName[0]);
// console.log(gameName.__proto__);
console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(9));
// console.log(gameName.indexOf('t'));

// const newString = gameName.substring(0,5); // can not use negative value
// console.log(newString);

const anotherString = gameName.slice(-19,4); // can use negative value
console.log(anotherString);   // empty string because -19 is less than 4 and it will start from 0 and end at 4 and it will give us empty string because it will not find any character between -19 and 4.

const newStringOne = "  Suraj  ";
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://suraj.com/suraj%50Satmohankar%50Amercia";

console.log(url.replace("%50",'-'));
console.log(url.replaceAll("%50",'-')); // replace only first occurrence of %50 with - and replaceAll will replace all occurrence of %50 with -
console.log(gameName.split('-')); 

const balance = new Number(100);
// console.log(balance);

// console.log(balance.toString().length);
console.log(balance.toFixed(1))
console.log(balance.toFixed(2));

const otherName = 123.8943;
console.log(otherName.toPrecision(4))
console.log(otherName.toPrecision(3))
// console.log(Math);
console.log(Math.abs(-44))
console.log(Math.round(4.66));

// console.log(Math.max(12,23,43,3,-2))
// console.log(Math.min(12,23,43,3,-2))

// Math.random()  --> always give value from 0 to 1.
// console.log((Math.random()*10)+1);
// console.log(Math.floor(Math.random()*10)+1);

const min = 10;
const max = 20;

console.log(Math.floor(Math.random()*(max - min + 1)+ min))