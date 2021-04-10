// Assignment Code
var generateBtn = document.querySelector("#generate");
var uppercase;
var lowercase;
var number;
var symbol;

// Ask for user input
var length = Number(prompt("How many characters would you like your password to be?"));
// The length of the password user must choose.
while (isNaN(length) || length < 8 || length > 128) length = Number(prompt("Length must be 8-128 characters. How many characters would you like your password to be?"));

//// create arrays for all lowercase, upercase, numeric, and special characters & a variable for the password string

caseArray = [];
lowerCaseChar = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
upperCaseChar = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "W", "X", "Y", "Z"];
numericChar = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
specialChar = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "{", "}", "|", "[", "]", ";", "'", ":", "<", ">", "?", "/"];

var uppers = confirm("Would you like to use uppercase letters?");
var lowers = confirm("Would you like to use lowercase letters?");
var numbers = confirm("Would you like to use numbers?");
var symbols = confirm("Would you like to use special characters?");

while (!uppers && !lowers && !numbers && !symbols) {
  alert("You must select at least one character type!");
  uppers = confirm("Would you like to use uppercase letters?");
  lowers = confirm("Would you like to use lowercase letters?");
  numbers = confirm("Would you like to use numbers?");
  symbols = confirm("Would you like to use special characters?");
};

generateBtn.addEventListener('click', function () {
  generateNewPassword();
});
// creating a function for generating the password
function generatePassword() {
  var password = "";

  var allowed = {};
  if (uppers) password += rando(allowed.uppers = "ABCDEFGHIJKLMNOPQRSTUVWXYZ");
  if (lowers) password += rando(allowed.lowers = "abcdefghijklmnopqrstuvwxyz");
  if (numbers) password += rando(allowed.numbers = "1234567890");
  if (symbols) password += rando(allowed.symbols = "!@#$%^&*(){}[]=<>/,.");

  for (var i = password.length; i < length; i++) password += rando(rando(allowed).value);

  document.getElementById("password").value = randoSequence(password).join("");
  generateButton = document.getElementById("generateButton");
  passwordEntry = document.getElementById("passwordEntry");
  generateButton.onclick = generatePassword;
};

// var length = 8,
//         charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
//         retVal = "";
//     for (var i = 0, n = charset.length; i < length; ++i) {
//         retVal += charset.charAt(Math.floor(Math.random() * n));
//     }
//     return retVal;


