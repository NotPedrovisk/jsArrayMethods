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
//code used to map an array of user obj into array of just the names
let john = {name: "John", age:25};
let pete = {name: "Pete", age: 30};
let moe = {name: "Moe", age:28};

let users = [john, pete, moe];

let name = users.map(item=>
  item.name);

console.log(name);

console.log("----------Exercise Map To Objects----------");
//code used to create another array of user objs with full names generated from name and surname from
//original array
let joao = {name: "Joao", surname: "Smith", id:1};
let pedro = {name: "Pedro", surname: "Hunt", id:2};
let fred = {name: "Fred", surname: "Key", id:3};

let objUsers = [joao,pedro,fred];

let usersMapped = objUsers.map(user=>({
  fullName : user.name +" " + user.surname,
  id:user.id}));

  console.log(usersMapped[0].id);
  console.log(usersMapped[0].fullName);

console.log("----------Exercise Sort Users By Age----------");
//sorts through obj array by age;
let jack = {name: "Jack", age:25};
let mike = {name: "Mike", age: 30};
let steve = {name: "Steve", age:28};

let ageArr = [jack,mike,steve];

function sortByAge(array){
  array.sort((a,b)=> a.age - b.age)
};

sortByAge(ageArr);

console.log(ageArr[0].name);//jack
console.log(ageArr[1].name);//steve
console.log(ageArr[2].name);//mike

console.log("----------Exercise Get Average Age----------");
//gets array of obj and returns the average age
let jay = {name: "Jay", age:25};
let mark = {name: "Mark", age: 30};
let stone = {name: "Stone", age:28};

let avgArr = [jay,mark,stone];

function getAverageAge(arr){
  let total = arr.reduce((sum, current)=>sum + current.age,0);
  return Math.round(total/avgArr.length)

};

console.log(getAverageAge(avgArr));

console.log("------Exercise Create Keyed Object From Array------");

let usersToKey = [
  {id: 'john', name: "John Smith", age: 20},
  {id: 'ann', name: "Ann Smith", age: 24},
  {id: 'pete', name: "Pete Peterson", age: 31},
];

function groupById(arr){
 return arr.reduce((obj,value)=>{
  obj[value.id] = value;
  return obj;
  })
}

console.log(groupById(usersToKey))