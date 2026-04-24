const user ={
    username : "Suraj satmohankar",
    price : 123456,

    welcomeMessage : function(){
        if(this.username == "suraj"){
        console.log(`${this.username} is the best player and he bought shoes with ${this.price} price`);
        }else{
            console.log(`${this.username} is new football player`);
            
        }
        
    }
}
user.welcomeMessage();
user.username ="Maddy";
user.price = 1234;
user.welcomeMessage();



const chai = () =>{
    username : "kamesh"
    console.log(this.username); // undefined
    
}
chai();


//IIFI

(function chai(){
    //It is named IFFI
    console.log("DB connecton is on");
    
})(); // here ; is important

( (name)=>{
    console.log(`DB connection is working ${name}`);
    
})("Kartik")


const addTwo =(num1, num2) =>{ 
    return num1 + num2;     // if you want to use return word then use this {} and if you dont want to use return word then use () like this - (num1 + num2)
}


// const addNum =(num1, num2) => (num1 + num2);// if you dont want to use return word then use this () 
// console.log(addNum(6,7));

const addNum =(num1, num2) => ({username : "Mahewari"}) // if you want to return object use it under {} like this-{username : "Mahewari"}
console.log(addNum(7,8));

