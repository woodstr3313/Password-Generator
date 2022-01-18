// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
console.log("You clicked the button!")

let person = prompt("How many characters would you like your password to contain?",);

if (person != null) {
}

//1. Prompt the user for the password criteria
//    a. Password Length 8 < 128 characters
//    b. Lowercase, uppercase, numbers, special characters
//2. Validate the input
//3. Generate password based on criteria.




//4. Display password to the page. 
return "generated password will go here!"
}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
