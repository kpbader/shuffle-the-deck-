// Global variables 
var lower = 'abcdefghijklmnopqrstuvwxyz';
var upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var numeric = '1234567890';
var special = '!@#$%^&*()';
var setPassword = "";
var randomLower = "";
var randomUpper = "";
var randomNumeric = "";
var randomSpecial = "";


// GENERATE PASSWORD FUNCTION 
function generatePassword() {
  // Enter number of characters 
 var length = window.prompt("What is the length of your password? It must be between 8 and 128 characters.");

//  If user enters too low or high of a number, return them to the beginning 
  if (length < 8 || length > 128) {
    window.alert("You must enter a valid number. Please try again!");
    return null;
  };

 // Confirm options 
 var isLower = window.confirm("Would you like to include lowercase letters?");
 var isUpper = window.confirm("Would you like to include uppercase letters?");
 var isNumeric = window.confirm("Would you like to include numbers?");
 var isSpecial = window.confirm("Would you like to include special characters?");

 // for loop, covering all options 
 for (var index = 0; index < length; index++) {
  randomLower += lower.charAt(Math.floor(Math.random() * lower.length));
  randomUpper += upper.charAt(Math.floor(Math.random() * upper.length));
  randomNumeric += numeric.charAt(Math.floor(Math.random() * numeric.length));
  randomSpecial += special.charAt(Math.floor(Math.random() * special.length));
 };

 // User chooses correct amount of characters
if (length >= 8 && length <= 128) {

    // if user chooses all options...
    if (isLower === true && isUpper === true && isNumeric === true && isSpecial === true) {
       setPassword += randomLower + randomUpper + randomNumeric + randomSpecial;
       var tempStr="";
        // append to the temp variable which will be our password for a random character
         // to the length of the password, with a random character from the setPassword variable 
       for (var index = 0; index < length; index++) {
         tempStr += setPassword.charAt(Math.floor(Math.random() * setPassword.length))
       };
       // cut password to the length of the user input 
       return tempStr.slice(0, length);
      }

    // if user chooses no options 
    if  (isLower === false && isUpper === false && isNumeric === false && isSpecial === false){
      window.alert("You must choose at least one option!");
      return null; 
    }

    // if user chooses uppercase, numbers, and special characters...
    if (isLower === false && isUpper === true && isNumeric === true && isSpecial === true) {
      setPassword += randomUpper + randomNumeric + randomSpecial;
        // append to the temp variable which will be our password for a random character
         // to the length of the password, with a random character from the setPassword variable
       let tempStr = "";
       for (var index = 0; index < length; index++) {
         tempStr += setPassword.charAt(Math.floor(Math.random() * setPassword.length))
       };
       // cut password to the length of the user input 
       return tempStr.slice(0, length);
    } 

    // lowercase only
    if (isLower === true && isUpper === false && isNumeric === false && isSpecial === false) {
      setPassword += randomLower;
        // append to the temp variable which will be our password for a random character
         // to the length of the password, with a random character from the setPassword variable
       let tempStr = "";
       for (var index = 0; index < length; index++) {
         tempStr += setPassword.charAt(Math.floor(Math.random() * setPassword.length))
       };
       // cut password to the length of the user input 
       return tempStr.slice(0, length);
    }

    // if user chooses numbers and special characters...
    if (isLower === false && isUpper === false && isNumeric === true && isSpecial === true) {
      setPassword += randomNumeric + randomSpecial;
        // append to the temp variable which will be our password for a random character
         // to the length of the password, with a random character from the setPassword variable
       let tempStr = "";
       for (var index = 0; index < length; index++) {
         tempStr += setPassword.charAt(Math.floor(Math.random() * setPassword.length))
       };
       // cut password to the length of the user input 
       return tempStr.slice(0, length);
    }

    // lowercase and uppercase only 
    if (isLower === true && isUpper === true && isNumeric === false && isSpecial === false) {
      setPassword += randomLower + randomUpper;
        // append to the temp variable which will be our password for a random character
         // to the length of the password, with a random character from the setPassword variable
       let tempStr = "";
       for (var index = 0; index < length; index++) {
         tempStr += setPassword.charAt(Math.floor(Math.random() * setPassword.length))
       };
       // cut password to the length of the user input 
       return tempStr.slice(0, length);
    }

    // if user chooses only special characters 
    if (isLower === false && isUpper === false && isNumeric === false && isSpecial === true) {
    setPassword += randomSpecial;
      // append to the temp variable which will be our password for a random character
         // to the length of the password, with a random character from the setPassword variable
       let tempStr = "";
       for (var index = 0; index < length; index++) {
         tempStr += setPassword.charAt(Math.floor(Math.random() * setPassword.length))
       };
       // cut password to the length of the user input 
       return tempStr.slice(0, length);
    }

    // lowercase, uppercase, and numbers only 
    if (isLower === true && isUpper === true && isNumeric === true && isSpecial === false) {
      setPassword += randomLower + randomUpper + randomNumeric;
        // append to the temp variable which will be our password for a random character
         // to the length of the password, with a random character from the setPassword variable
       let tempStr = "";
       for (var index = 0; index < length; index++) {
         tempStr += setPassword.charAt(Math.floor(Math.random() * setPassword.length))
       };
       // cut password to the length of the user input 
       return tempStr.slice(0, length);
    }

    // uppercase only 
    if (isLower === false && isUpper === true && isNumeric === false && isSpecial === false) {
      setPassword += randomUpper;
        // append to the temp variable which will be our password for a random character
         // to the length of the password, with a random character from the setPassword variable
       let tempStr = "";
       for (var index = 0; index < length; index++) {
         tempStr += setPassword.charAt(Math.floor(Math.random() * setPassword.length))
       };
       // cut password to the length of the user input 
       return tempStr.slice(0, length);
    }

    // lowercase, number, and special
    if (isLower === true && isUpper === false && isNumeric === true && isSpecial === true) {
      setPassword += randomLower + randomNumeric + randomSpecial;
        // append to the temp variable which will be our password for a random character
         // to the length of the password, with a random character from the setPassword variable
       let tempStr = "";
       for (var index = 0; index < length; index++) {
         tempStr += setPassword.charAt(Math.floor(Math.random() * setPassword.length))
       };
       // cut password to the length of the user input 
       return tempStr.slice(0, length);
    }

    // number only 
    if (isLower === false && isUpper === false && isNumeric == true && isSpecial == false) {
      setPassword += randomNumeric;
        // append to the temp variable which will be our password for a random character
         // to the length of the password, with a random character from the setPassword variable
       let tempStr = "";
       for (var index = 0; index < length; index++) {
         tempStr += setPassword.charAt(Math.floor(Math.random() * setPassword.length))
       };
       // cut password to the length of the user input 
       return tempStr.slice(0, length);
    }

    // lowercase, uppercase, and special
    if (isLower === true && isUpper === true && isNumeric === false && isSpecial === true) {
      setPassword += randomLower + randomUpper + randomSpecial;
        // append to the temp variable which will be our password for a random character
         // to the length of the password, with a random character from the setPassword variable
       let tempStr = "";
       for (var index = 0; index < length; index++) {
         tempStr += setPassword.charAt(Math.floor(Math.random() * setPassword.length))
       };
       // cut password to the length of the user input 
       return tempStr.slice(0, length);
    }

    // uppercase and special 
    if (isLower === false && isUpper === true && isNumeric === false & isSpecial === true) {
      setPassword += randomUpper + randomSpecial;
        // append to the temp variable which will be our password for a random character
         // to the length of the password, with a random character from the setPassword variable
       let tempStr = "";
       for (var index = 0; index < length; index++) {
         tempStr += setPassword.charAt(Math.floor(Math.random() * setPassword.length))
       };
       // cut password to the length of the user input 
       return tempStr.slice(0, length);
    }

    // lowercase and number 
    if (isLower === true && isUpper === false && isNumeric === true && isSpecial === false) {
      setPassword += randomLower + randomNumeric;
        // append to the temp variable which will be our password for a random character
         // to the length of the password, with a random character from the setPassword variable
       let tempStr = "";
       for (var index = 0; index < length; index++) {
         tempStr += setPassword.charAt(Math.floor(Math.random() * setPassword.length))
       };
       // cut password to the length of the user input 
       return tempStr.slice(0, length);
    }

    // uppercase and number 
    if (isLower === false && isUpper === true && isNumeric === true && isSpecial === false) {
      setPassword += randomUpper + randomNumeric;
        // append to the temp variable which will be our password for a random character
         // to the length of the password, with a random character from the setPassword variable
       let tempStr = "";
       for (var index = 0; index < length; index++) {
         tempStr += setPassword.charAt(Math.floor(Math.random() * setPassword.length))
       };
       // cut password to the length of the user input 
       return tempStr.slice(0, length);
    }

    // lowercase and special
    if (isLower === true && isUpper === false && isNumeric === false && isSpecial === true) {
      setPassword += randomLower + randomSpecial;
        // append to the temp variable which will be our password for a random character
         // to the length of the password, with a random character from the setPassword variable
       let tempStr = "";
       for (var index = 0; index < length; index++) {
         tempStr += setPassword.charAt(Math.floor(Math.random() * setPassword.length))
       };
       // cut password to the length of the user input 
       return tempStr.slice(0, length);
    }
  }
};
// END GENERATE PASSWORD FUNCTION 


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.textContent = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

