/** 
 * random - prints number between 0 and 1
 * setTimeout - executes after specified time
 * setInteranl - execute after each interval of time until cleared
 * In single line function no return keyword is needed.
 */

randomNumber = Math.random() 
console.log( "First random number : " + randomNumber );

let printRandomNumber = () =>  console.log(Math.floor( Math.random() * 100 )); // returns a random number between 0 and 100
let printRandomDecimalNumber = () =>  console.log(Math.random() * 100); // returns a random number between 0.0 and 99.999999999

let timeoutID1 = setTimeout( printRandomNumber, 2, console.log("Timeout 1")); //Executes after 20 milliseconds
console.log("Timeout ID1: " + timeoutID1);

let timeoutID2 = setTimeout( printRandomNumber, 6000, console.log("Timeout 2") ); //Executes after 6 sec(6000 milliseconds)
console.log("Timeout ID2 : " + timeoutID2);

clearTimeout(timeoutID2); // setTimeout function with id = timeoutID2 is terminated

let intervalID = setInterval( printRandomDecimalNumber, 1000); // executes every 1 sec;

let stopInterval = () => clearInterval(intervalID);

setTimeout( stopInterval, 4000);

