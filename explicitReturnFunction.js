/**
 * Password Validation
 * Rules: 
 * 1. Both passwords should match
 * 2. Length of characters >= 8
 *
 * Valid Password:
 *    return { status : "success" }
 * Invalid Password:
 *    return { status : "failed", reasons : [] }
 */


let passwordValidationStatus = (password1, password2) => {
  let isMatchingPasswords = password1 === password2;
  let isGreaterLength = password1.length >= 8;
  
  let isValidPassword = isGreaterLength && isMatchingPasswords;
  
  if (isValidPassword){
      return { status : "success" };
  } else {

      let reasons = [];
      if (!isMatchingPasswords){
          reasons.push("Error : Passwords are not matching. Password1 = " + password1 +" Password2 = " + password2 );
      }

      if (!isGreaterLength){
          reasons.push("Error : The length of password should be greater than 8");
      }

      return { status : "failed", reasons : reasons};
  }
};


let pass1 = "abcd123";
let pass2 = "abcd12";


let returned = passwordValidationStatus(pass1, pass2);
if (returned.status === "success"){
  console.log("Valid Password");
} else {
  console.log("Invalid Password");
  console.log(returned.reasons);
}

