// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var lowerCase = "abcdefghijklmnopqrstuvwxyz";
  var numbers = "0123456789";
  var specialCharacters = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
  var multiChoice = "";
  var password = "";

  var passwordLength = prompt("How many characters long do you want your password to be? Please enter a number between 8 and 128.");

  if (passwordLength < 8 || passwordLength > 128 || isNaN(passwordLength)) {
    alert("Your password doesn't meet the minimum criteria. Your password must be between 8 and 128 characters long. Please enter another number.");
    return;
  } else {
    var passwordNumbers = confirm("Do you want numbers included in your password?");
    var passwordLower = confirm("Do you want lowercase letters in your password?");
    var passwordUpper = confirm("Do you want uppercase letters in your password?");
    var passwordSpecial = confirm("Do you want any special characters in your password?");
  }

  if (passwordNumbers) {
    multiChoice += numbers;
  }
  if (passwordLower) {
    multiChoice += lowerCase;
  }
  if (passwordUpper) {
    multiChoice += upperCase;
  }
  if (passwordSpecial) {
    multiChoice += specialCharacters;
  }

  for (i = 0; i < passwordLength; i++) {
    password += multiChoice[Math.floor(Math.random() * multiChoice.length)]
  }
  return(password);
}

var passwordText = document.querySelector("#password");
function writePassword(password) {
  if (password.length === 0) {
    return;
  }
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", function() {writePassword(generatePassword())});
