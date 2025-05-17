console.log("----------Exercise 1----------");


function camelize(toString){
   const noDash = toString.split("-");
   console.log(noDash);

   const newString = noDash.join("");
   console.log(newString)
};

camelize("background-color")