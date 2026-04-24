
const myNums = [1,2,3,4,5,6,7,8,9,10];

// const newNums = myNums.filter( (num) => num > 4 );
// console.log(newNums);

// const newNums = myNums.filter((num) =>{
//   return  num > 4;     //here rerturn word is very important beaacuse we are using {} i arrow function if we dont want to use return word then we can use () like this - myNums.filter(num => num > 4);
// });
// console.log(newNums);


const newNums = [];

myNums.forEach((num) =>{
    if(num > 4){
        newNums.push(num);
    }
})
console.log(newNums);


const books =[
    {
        title : "Book 1", genre : "Fiction", edition : 2005
    },
    {
        title : "Book 2`", genre : "NonFiction", edition : 2001
    },
    {
        title : "Book 3", genre : "History", edition : 2005
    },
    {
        title : "Book 4", genre : "English", edition : 2004
    },
    {
        title : "Book 5", genre : "Science", edition : 2005
    },
    {
        title : "Book 6", genre : "Science", edition : 2008
    },
]

let newBook = books.filter( (book) => book.genre === "Science" && book.edition === 2008 );
console.log(newBook);
// newBook = books.filter( (book) => book.edition === 2005 );
// console.log(newBook);

newBook = books.filter((book) => {
    return book.edition === 2005 && book.genre === "Science";});
console.log(newBook);

// const newBook = books.filter( (book) => {
// return book.genre === "Science" 
// });
// console.log(newBook);

const mynumbers = [1,2,3,4,5,6,7,8,9,10];

// const newNumbers = mynumbers.map((num) => num * 2);
// console.log(newNumbers);

const newNumbers = mynumbers.map((num) => {
    return num * 2;
}
);
console.log(newNumbers);


const newNum = mynumbers
                        .map((num) => num * 10)
                        .map((num) => num + 1)
                        .filter((num) => num > 51);

console.log(newNum);