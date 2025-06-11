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
let inArr = [1,2,3,4,5,6,7,8,9,];
//could not finish it without seeing solution, was trying a filter method instead of for loop
function filterRangeInPlace(arr,a,b){
    for(let n = 0; n < arr.length;n++){
      let value = arr[n]
      if(value < a || value > b){
        inArr.splice(n,1);
        n--;
      }
    }
}

filterRangeInPlace(inArr, 2,5)//expected to return 2,3,4,5
console.log(inArr)

console.log("----------Exercise 4----------");
let arrDecreasing = [5,2,1,-10,8];

//sort array in decreasing order
//iterates every item of the array with the others,eg: 5 would be "a", 2 would be "b"
//then checks if function returns true, so 2-5, false
//then 5 stays as "a", then 1 would be "b", and so on
arrDecreasing.sort((a,b)=> b-a)

console.log(arrDecreasing);