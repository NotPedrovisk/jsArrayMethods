console.log("----------Exercise 1----------");


function camelize(toString){
    return toString
    //splits the string at the -, removing it.
    .split("-")
   //index is the iteration of the loop, ? means if..else
   //conditional? if true : else false
  .map((word, index)=>
    index==0? word : word[0].toUpperCase() + word.slice(1))
  .join("")
  
};

console.log(camelize("background-color"));
console.log(camelize("sussy-amogus"));

console.log("----------Exercise 2----------");
//filter array, get items equal or higher than a and equal or lower than b, then return them in a new array
let arr = [1,2,3,4,5,6,7,8];

function filterRange(arr, a, b){
    return arr.filter((item) =>(a <= item && item <=b))
}

let filtered = filterRange(arr, 2,6)
console.log(filtered)

console.log("----------Exercise 3----------");
//get array, removes all values except between a & b, should  modify the original array and not return anything
let inArr = [5,3,8,1,2,4,7,9];

function filterRangeInPlace(arr,a,b){
    return arr.
}

filterRangeInPlace(inArr, 1,4)//expected to return 
