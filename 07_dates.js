let myDates = new Date();
console.log(myDates.toString());
console.log(myDates.toDateString());
console.log(myDates.toLocaleDateString());
console.log(myDates.getDate());
console.log(typeof myDates);

let createdDate = new Date(2024, 5, 20);
console.log("createdDate:", createdDate);
console.log("createdDate In string ", createdDate.toString());

let createdNewDate = new Date("2024, 5, 20");
console.log("createdNewDate:", createdNewDate);
console.log("createdNewDate In string ", createdNewDate.toString());

let myTimeStamp = Date.now();
// console.log(mytimeStamp);

console.log(myTimeStamp.toString());
console.log(createdNewDate.getTime());

console.log(Date.now());
console.log(Math.floor(Date.now()/1000)); // to get in seconds