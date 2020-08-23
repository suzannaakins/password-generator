// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Assignment code here

//array for numbers 
var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
//array for lowercase letters
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
//array for uppcase letters
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
//.array for special characters
var specialChar = ["+", "-", "&", "|", "!", "(", ")", "{", "}", "[", "]", "^",
  "~", "*", "?", ":", "\""];

// //array for ALL possible characters
// var possible = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "+", "-", "&", "|", "!", "(", ")", "{", "}", "[", "]", "^",
//   "~", "*", "?", ":", "\""];

//function to get a random item from an array
var getRandom = function(x) {
  var random = x[Math.floor(Math.random() * x.length)]
  return random;
}

var getLower = getRandom(lowerCase)

var getUpper = getRandom(upperCase)

var getNumber = getRandom(number)

var getSpecial = getRandom(specialChar)

// write Generate Password Function
function generatePassword() {
  //prompt user to enter length between 8 and 128
  var passwordLength = prompt("How long would you like your password to be? Please choose a number between 8 and 128.");
  passwordLength = parseInt(passwordLength)
  while (passwordLength === "" || passwordLength === null || passwordLength < 8 || passwordLength > 128 || isNaN(passwordLength)) {
    // add passwordLenth = NOT A NUMBER
    console.log(passwordLength);
    passwordLength = prompt("That's not a valid option. Please choose a number between 8 and 128.")
  }
  console.log("Password length will be " + passwordLength + " characters long.")

  //ask if user wants lowercase letters 
  var lowerCaseConfirm = confirm("Would you like lowercase letters included in your password?");
  var upperCaseConfirm = confirm("Would you like uppercase letters included in your password?");
  var numberConfirm = confirm("Would you like numbers included in your password?");
  var specialConfirm = confirm("Would you like special characters included in your password?");

  while ((!lowerCaseConfirm) && (!upperCaseConfirm) && (!numberConfirm) && (!specialConfirm)) {
    alert("You need to choose at least one option. Thank you!")
    var lowerCaseConfirm = confirm("Would you like lowercase letters included in your password?");
    var upperCaseConfirm = confirm("Would you like uppercase letters included in your password?");
    var numberConfirm = confirm("Would you like numbers included in your password?");
    var specialConfirm = confirm("Would you like special characters included in your password?");
  }

  //array of GUARANTEED characters (must include these based on user's answers to confirm questions)
  var guaranteedChars = [];

  var possibleChars = [];

  if (lowerCaseConfirm) {
    possibleChars = possibleChars.concat(lowerCase);
    guaranteedChars.push(getLower);
  }

  //ask if user want uppercase letters
  if (upperCaseConfirm) {
    possibleChars = possibleChars.concat(upperCase);
    guaranteedChars.push(getUpper);
  }

  //ask if user wants numbers
  if (numberConfirm) {
    possibleChars = possibleChars.concat(number);
    guaranteedChars.push(getNumber);
  }

  //ask if user wants special characters
  if (specialConfirm) {
    possibleChars = possibleChars.concat(specialChar);
    guaranteedChars.push(getSpecial);
  }

  console.log(possibleChars)

  //array of guaranteed AND all possible characters
  var password = guaranteedChars;
  
  var totalLength = passwordLength - guaranteedChars.length
  // for loop to grab the rest of the characters from possibleChars array, randomly
  for (var j = 0; j < totalLength; j++) {
    password.push(getRandom(possibleChars))
  }
  var finalPassword = ""
  for (var i=0; i < password.length; i++) {
    finalPassword = finalPassword + password[i]
  }

  // to add them together you do guaranteedChars.concat(possibleChars);
  // join array, look up array join for javascript
  return finalPassword;
};

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  //based on answers, write functions to retrieve random values for criteria by using Math.random

  //display alert the password
  //}

  var passwordText = document.querySelector("#password");

  passwordText.value = password;
};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
