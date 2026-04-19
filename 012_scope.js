// var c= 100;
// console.log(c);

if (true){
    let a = 10;
    const b = 20;
    var c = 30;
    console.log(c);
    
}

// console.log(a);
// console.log(b);
// console.log(c);

function one(){
     
    let one = 12;
    console.log("suraj ", one);
    const username = "Maharaj";
    function two(){
        const name = "vishal";
        console.log(username);
    }
    // console.log(name);
    two();
}
one();



// +++++++++++++++++++++++++++INTERESTING++++++++++++++++++++++++++
console.log(addOne(5)); // 6
function addOne(num){
    return num+ 1;
}

console.log(addTwo(5)); // 7
const addTwo = function addTwo(num){
    return num+2;
}
