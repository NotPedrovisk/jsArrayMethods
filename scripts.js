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
//had to look at solution, TOP didnt explain what JSInfo did;
console.log("----------Exercise 5----------");
let arrCopy = ["HTML", "JavaScript", "CSS"];

let sorted = copySorted(arrCopy);

function copySorted(arr){
  return arr.slice().sort()
}

console.log(arrCopy);
console.log(sorted);

console.log("----------Exercise 6----------");
//Write the function shuffle(array) that shuffles (randomly reorders) elements of the array
let arrToShuffle = [1,2,3,4];

function shuffleArray(arr){
  //math.random() - 0.5 is a random number that may be positive or negative
  let shufled = arr.sort(()=> Math.random() - 0.5);
  console.log(shufled);
}

shuffleArray(arrToShuffle);

shuffleArray(arrToShuffle);

console.log("----------Exercise 7----------");

let strings = ["Hare", "Krishna", "Hare", "Krishna",
  "Krishna", "Krishna", "Hare", "Hare", ":-O"];

function unique(arr){
  let result = [];

  for(let str of arr){
    if (!result.includes(str)){
      result.push(str);
    }
  }
  return result;
};

console.log(unique(strings));
//had no idea what to do, was trying to do something like exercise 3

console.log("----------Exercise Map To Names----------");
let john = {name: "John", age:25};
let pete = {name: "Pete", age: 30};
let moe = {name: "Moe", age:28};

let users = [john, pete, moe];

let name = users.map(item=>
  item.name);

console.log(name);