// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Assignment code here
var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var specialChar = ["+", "-", "&&", "||", "!", "(", ")", "{", "}", "[", "]", "^",
  "~", "*", "?", ":", "\"", "\\"];

//ask if user wants lowercase letters 
var lowerCaseConfirm = window.confirm("Would you like lowercase letters included in your password?");
if (lowerCaseConfirm) {
  ////push all lowercase to array
  concat //concatinate 
  allpossiblecharactersarray.concat(lowerCase)
  //generate RANDOM lowercase - function
  //add THAT random lowercase to password RESULT(string)
}
else {
  //don't include lowercase
}
}

//ask if user want uppercase letters
var upperCaseConfirm = window.confirm("Would you like uppercase letters included in your password?");
if (upperCaseConfirm) {
  //generate random uppercase letters for password
}
else {
  //don't include uppercase
}

//ask if user wants numbers
var numberConfirm = window.confirm("Would you like numbers included in your password?");
if (numberConfirm) {
  //generate random numbers (Between 0 and 9) for password
  var randomNumber = Math.floor(Math.random() * 10);
}
else {
  //don't include numbers
}

//ask if user wants special characters
var specialConfirm = window.confirm("Would you like special characters included in your password?");
if (specialConfirm) {
  //generate random special characters for password
}
else {
  //don't include special characters
}



// write Generate Password Function
function generatePassword() {
  //prompt user to enter length between 8 and 128
  var length = window.prompt("How long would you like your password to be? Please choose a number between 8 and 128.");
  while (length === "" || length === null || length < 8 || length > 128) {
    window.prompt("That's not a valid option. Please choose a number between 8 and 128.")
  }
  console.log("Password length will be " + length + "characters long.")
};

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
};

  //based on answers, write functions to retrieve random values for criteria by using Math.random

  //display alert the password
}

var passwordText = document.querySelector("#password");

passwordText.value = password;

// Add event listener to generate button
debugger;
generateBtn.addEventListener("click", writePassword);
