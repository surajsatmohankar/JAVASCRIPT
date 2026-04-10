const name = "Suraj"
const repoCount = 100;

console.log(name + repoCount + " value");
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);


const gameName = new String('Suraj-Satmohankar-America');

console.log(gameName[0]);
console.log(gameName.__proto__);
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(9));
console.log(gameName.indexOf('t'));

const newString = gameName.substring(0,5); // can not use negative value
console.log(newString)

const anotherString = gameName.slice(-19,4); // can use negative value
console.log(anotherString)

const newStringOne = "  Suraj  ";
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://suraj.com/suraj%50Satmohankar"

console.log(url.replace("%50",'-'));

console.log(gameName.split('-'));
