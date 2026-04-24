let balance = 100000;

if(balance < 20000){
    console.log("please inrease your bank balance");
    
}else{
    console.log("Thanks for maintaining your credit");
}

const month = 1
switch (month) {
    case 1:
        console.log("January");
        
        break;

    case 2:
        console.log("FEB");
        
        break;
    case 3:
        console.log("MAR");
        
        break;
    case 4:
        console.log("APRIL");
        
        break;
        

    default:
        break;
}


//FALSY VALUES  and Truthy values
const username = []

if(username){
    console.log("user has valid Email"); // ye run hota hai because [] consider as value
     
}else{
    console.log("user has no Email");
    
}

//false, 0, -0, BigInt 0n, "" , null, undefined, NaN

//truthy value
//"0", "false" , 'false' " ", {}

// Nullish coalescing Opeator (??): null undefined

let val1;
// val1 = 5 ?? 10;
// val1 = null ?? 10
// val1 = undefined ?? 16
val1 = null ?? 10 ?? 20

console.log(val1);

//Ternary oprator

const username2 = "Shahid"
  if(username2){
    username2 == "Shahid" ? console.log("Winner" ) :
    console.log("Try Another game")
  }
