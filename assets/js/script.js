// Assignment Code
var generateBtn = document.querySelector("#generate");

//function for generate password in the function write password
function generatePassword() {
//array for uppercase letters, lowercase letters, numbers, and special characters
var specialCharacters = [ "!", "#", "$", "%", "&", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "`", "{", "|", "}", "~", " ' ", " " , ' " ', "\\" ];
var numbersPass = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

//special variable to check the answer from user prompts
var userAnsweryes = "y";
var userAnswerno = "n";

//initial password length
var passwordLength = 0;

//array that is created when certain prompts are answered
var charactersChoicearr = [];

//string with random password characters, created at end with users selection
var retVal = "";


//To Do: create prompts
//To Do: create password length prompt, lower, upper, character, and number prompts

}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
