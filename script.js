// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
console.log("You clicked the button!")

var charset = "";

let num_char = prompt("How many characters would you like your password to contain?",);

console.log(num_char);

if (num_char != null && num_char >= 8 && num_char <= 128) {
  let special_char = confirm("Click OK to confirm special characters");
  
  console.log(special_char);
  if (special_char == true) {
    let specials = " !\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~"
    charset = charset + specials;
  }
  if (special_char != null) {
      
      let numeric_char = confirm("Click OK to confirm including numeric characters.");
      console.log(numeric_char);
      if (numeric_char == true) {
        let numerals = "0123456789";
        charset = charset + numerals;
      }
       if (numeric_char != null) {
       
        let lowercase_char = confirm("Click OK to confirm including Lowercase characters.");
        console.log(lowercase_char);
        if (lowercase_char == true) {
          let lowers = "abcdefghijklmnopqrstuvwxyz";
          charset = charset + lowers;
        }
        if (lowercase_char != null) {
         
          let uppercase_char = confirm("Click OK to confirm including Uppercase characters.");
          console.log(uppercase_char);
          if (uppercase_char == true) {
            let uppers = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
            charset = charset +uppers;
         }
         var password_gen ="";
         for (let i =0; i<num_char; i++){
          let character = charset.charAt(Math.floor(Math.random() * charset.length));
          password_gen = password_gen + character;
         }
         return password_gen;
      }
    }
  }
  else {//num_char is invalid
    alert("Not enough characters!");
  }


}
}
  //1. Prompt the user for the password criteria
//    a. Password Length 8 < 128 characters
//    b. Lowercase, uppercase, numbers, special characters
//2. Validate the input
//3. Generate password based on criteria.

//4. Display password to the page. 
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
