/**
 * Password validation
 * Rules: 
 * 1. Both passwords should match
 * 2. Length of characters >= 8
 */


let passwordValidation = (password1, password2) => {
  let isMatchingPasswords = password1 === password2;
  let isGreaterLength = password1.length >= 8;
  
  let isValidPassword = isGreaterLength && isMatchingPasswords;
  
  if (isValidPassword){
      console.log("Valid password");
  } else {
      console.log("Invaid Password")
      if (!isMatchingPasswords){
          console.log("Error : Passwords are not matching.\n Password1 = " + password1 +"\n Password2 = " + password2);
      }

      if (!isGreaterLength){
          console.log("Error : Your password length is " + password1.length + "\n The length of password should be 8")
      }
  }
};


let pass1 = "abcd123";
let pass2 = "abcd12";

console.log("Example 1 ");
passwordValidation(pass1, pass2);

console.log();
console.log("Example 2");
passwordValidation("abcd12345", "abcd12345")
