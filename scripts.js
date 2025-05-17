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

let arr = [1,2,3,4,5,6,7,8];

function filterRange(arr, a, b){
    return arr.filter((item) =>(a <= item && item <=b))
}

let filtered = filterRange(arr, 2,6)
console.log(filtered)