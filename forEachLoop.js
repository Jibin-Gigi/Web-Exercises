//iterating in an array.

let array = [1, 2, 3, 4];
console.log("Method 1");
array.forEach( value => console.log(value)); //method 1

console.log("Method 2");
let printValues = value => console.log(value); // let printValues = (value) => console.log(value);
array.forEach(printValues);
