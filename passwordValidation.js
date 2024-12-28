/**
 * Password validation
 * Rules: 
 * 1. Both passwords should match
 * 2. Length of characters >= 8
 */

let password1 = "abcd123";
let password2 = "abcd12";

let isMatchingPasswords = password1 === password2;
let isGreaterLength = password1.length >= 8;

let isValidPassword = isGreaterLength && isMatchingPasswords;

if (isValidPassword){
    console.log("Valid password");
} else {
    console.log("Invaid Password")
    if (!isMatchingPasswords){
        console.log("Passwords are not matching.\n Password1 = " + password1 +"\n Password2 = " + password2);
    } else {
        console.log("Your password length is " + password1.length + "\n The length of password should be 8")
    }
}
