// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Assignment code here
var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var specialChar = ["+", "-", "&", "|", "!", "(", ")", "{", "}", "[", "]", "^",
  "~", "*", "?", ":", "\""];

var getRandom = function (x) {
  var random = x[Math.floor(Math.random() * x.length)]
  console.log(random);
  return random;
}

var getLower = getRandom(lowerCase)
console.log(getLower)

var getUpper = getRandom(upperCase)
console.log(getUpper)

var getNumber = getRandom(number)
console.log(getNumber)

var getSpecial = getRandom(specialChar)
console.log(getSpecial)

// write Generate Password Function
function generatePassword() {
  //prompt user to enter length between 8 and 128
  var passwordLength = prompt("How long would you like your password to be? Please choose a number between 8 and 128.");
  while (passwordLength === "" || passwordLength === null || passwordLength < 8 || passwordLength > 128) {
    // add passwordLenth = NOT A NUMBER
    console.log(passwordLength);
    passwordLength = prompt("That's not a valid option. Please choose a number between 8 and 128.")
  }
  console.log("Password length will be " + passwordLength + "characters long.")

  //ask if user wants lowercase letters 
  var lowerCaseConfirm = confirm("Would you like lowercase letters included in your password?");
  var upperCaseConfirm = confirm("Would you like uppercase letters included in your password?");
  var numberConfirm = confirm("Would you like numbers included in your password?");
  var specialConfirm = confirm("Would you like special characters included in your password?");

  while ((!lowerCaseConfirm) && (!upperCaseConfirm) && (!numberConfirm) && (!specialConfirm)) {
    alert("You need to choose at least one option. Thank you!")
    lowerCaseConfirm = confirm("Would you like lowercase letters included in your password?");
    upperCaseConfirm = confirm("Would you like uppercase letters included in your password?");
    numberConfirm = confirm("Would you like numbers included in your password?");
    specialConfirm = confirm("Would you like special characters included in your password?");
  }

  var guaranteedChars = [];
  var possibleChars = [];
  if (lowerCaseConfirm) {
    var guaranteeLower = getRandom(lowerCase);
    guaranteedChars.push(guaranteeLower);
  }

  //ask if user want uppercase letters
  if (upperCaseConfirm) {
    var guaranteeUpper = getRandom(upperCase);
    guaranteedChars.push(guaranteeUpper);
  }

  //ask if user wants numbers
  if (numberConfirm) {
    var guaranteeNumber = getRandom(number)
    guaranteedChars.push(guaranteeNumber);
  }

  //ask if user wants special characters
  if (specialConfirm) {
    var guaranteeSpecial = getRandom(specialChar)
    guaranteedChars.push(guaranteeSpecial);
  }


  var password = []
  // for loop to grab the rest of the characters from possibleChars array, randomly

  // to add them together you do guaranteedChars.concat(possibleChars);
  // join array, look up array join for javascript
  return password;
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
