
const heroes = ["shaktiman", "naagraj", "doga", "Kilvish"];

let myObj = {
    name : "hitesh",
    age : 31,
    hobbies : "Dance"
}

JSON.stringify(myObj) // convert object into string
console.log(JSON.stringify(myObj));

console.log(myObj);
console.table([heroes,myObj]);

console.log(typeof null);

let myYoutubeName = "ravindraJadejadotcom"

let anothername = myYoutubeName
anothername = "chaiaurcode"

console.log(myYoutubeName)
console.log(anothername)

let userOne ={
    email :"user@yml.com",
   upi : "user@ybl"

}

let userTwo = userOne;

userOne.email = "maheshsawant.com"

console.log(userOne.email);
console.log(userTwo.email);

const heroe11 = ["shaktiman", "naagraj", "doga", "Kilvish"];

let myObj11 = {
    heroe11,
    name : "hitesh",
    age : 31,
    hobbies : "Dance"
}

console.log(myObj11);
