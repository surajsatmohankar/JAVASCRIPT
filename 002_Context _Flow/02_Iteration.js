const months =["jan", "feb", "mar", "apr", "may", "jun", "jul", "aug", "sep", "oct", "nov", "dec"];

for(let index =0 ;index < months.length; index++){
    const element = months[index];
    console.log(`value of index is ${index} and element is ${element}`);
}

 
const myArr = ["akshay", "vishal", "suraj", "kartik"];

let arr =0;
while(arr < myArr.length){
    // console.log(`value is ${myArr[arr]}`);
    arr = arr + 1;    
}

let num = 5;

do{
    console.log(`value is ${num}`);
     num = num + 1;
}while(num < 5);