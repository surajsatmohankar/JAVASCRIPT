const myNums = [1,2,3,4,5,6,7,8,9,10];
// const myTotal = myNums.reduce(function (acc, currval){
//     console.log(`my acc : ${acc} and currval : ${currval}`);
//     return acc + currval;
// }, );

const myTotal = myNums.reduce((acc, currval) => acc + currval, 0);
console.log(myTotal);


const shoppingCart = [
    {
        itemName :"java Course",
        price : 12367
    },
    {
        itemName :"pytho Course",
        price : 999
    },
    {
        itemName :"javaScript Course",
        price : 5000
    },
    {
        itemName :"SpringBoot Course",
        price : 12000
    },
]

const totalPrice = shoppingCart.reduce((acc, item) =>{
    return acc + item.price;
}, 0);
console.log(totalPrice);