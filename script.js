// Assignment Code
var generateBtn = document.querySelector("#generate");
var uppercase;
var lowercase;
var number;
var symbol;

//// create arrays for all lowercase, upercase, numeric, and special characters & a variable for the password string

caseArray = [];
lowerCaseChar = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
upperCaseChar = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "W", "X", "Y", "Z"];
numericChar = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
specialChar = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "{", "}", "|", "[", "]", ";", "'", ":", "<", ">", "?", "/"];

generateBtn.addEventListener('click', function () {
  var password=generateNewPassword();
  document.querySelector("#password").value=password;
});
// creating a function for generating the password
function generateNewPassword() {
  // Ask for user input
  caseArray=[];
  var length = Number(prompt("How many characters would you like your password to be?"));
  // The length of the password user must choose.
  while (isNaN(length) || length < 8 || length > 128) length = Number(prompt("Length must be 8-128 characters. How many characters would you like your password to be?"));

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
if (uppers) {
  caseArray = caseArray.concat(upperCaseChar);
};
if (lowers) {
  caseArray = caseArray.concat(lowerCaseChar);
};

if (numbers) {
  caseArray = caseArray.concat(numericChar);
};
if (symbols) {
  caseArray = caseArray.concat(specialChar);
};
console.log(caseArray);

var password = "";

for(var i = 0; i<length; i++) {
  var randomValue = caseArray[Math.floor(caseArray.length * Math.random())];
  password += randomValue;
};
return password;
};