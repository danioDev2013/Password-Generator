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


 //while loop to loop through the prompts
 while(parseInt(passwordLength) < 8 || parseInt(passwordLength) > 128) {
     //prompts user to enter number
    passwordLength = prompt("Please enter the length you want your password to be(password has to be no less than 8 and no more than 128): ");
    //checks if number is less than 8 or greater than 128
    if(parseInt(passwordLength) < 8 || parseInt(passwordLength) > 128){
        //if it is then it prompts to get the correct number
        passwordLength = prompt("Length that was entered, was either to short (<8) or to long(>128), Enter number a valid number between 8 and 128: ");
    //if password is not a number it will prompt for a number
    } else if(passwordLength == "" || Number.isNaN(parseInt(passwordLength))) {
        passwordLength = prompt("Enter a valid number between 8 and 128: ");
    } 
    //check that it is working
    console.log(passwordLength);

    //prompts character types: lowercase, uppercase, numbers, special characters
    //prompts user if they would like lowercase letters, y and n are used, creates a variable lowercasechoice
    var lowerCasechoice = prompt("Would you like lowercase letters in your new password(enter y for yes or n for no)? ");
    //changes answer to lowercase 
    lowerCasechoice = lowerCasechoice.toLowerCase();
        //checks to see if it is the right choices y and n
       if(!userAnswerno.includes(lowerCasechoice) && !userAnsweryes.includes(lowerCasechoice)) {
          alert("Not a choice");
          //if not then reprompts user
          lowerCasechoice = prompt("Would you like lowercase letters in your new password(enter y for yes or n for no)? ");
        //checks to see if it is y
       } else if(lowerCasechoice === userAnsweryes) {
          //if it is y then the lowercase array from above is added to the charactersChoicesarr
          charactersChoicearr = charactersChoicearr.concat(lowerCase);
       } 
       //checks to make sure is working
       console.log(charactersChoicearr);
    
    //uppercase user choice, creates a variable upperCasechoice
    var upperCasechoice = prompt("Would you like uppercase letters in your new password(enter y for yes or n for no)? ");
    //changes users choice to lowercase
    upperCasechoice = upperCasechoice.toLowerCase();
       if(!userAnswerno.includes(upperCasechoice) && !userAnsweryes.includes(upperCasechoice)) {
           alert("Not a choice");
           upperCasechoice = prompt("Would you like uppercase letters in your new password(y for yes or n for no)? ");
       //adds the uppercase from the array above to the characterschoice if y
        } else if(upperCasechoice === userAnsweryes) {
           charactersChoicearr =  charactersChoicearr.concat(upperCase);
       } 
       //checks to see if working
       console.log(charactersChoicearr);
    
    //numbers user choice, creates the variable for it
    var numbersChoice = prompt("Would you like numbers in your new password(enter y for yes or n for no)? ");
    //changes to lowercase
    numbersChoice = numbersChoice.toLowerCase();
       //checks if y or n, if not reprompts
       if(!userAnswerno.includes(numbersChoice) && !userAnsweryes.includes(numbersChoice)) {
           alert("Not a choice");
           numbersChoice = prompt("Would you like numbers in your new password(enter y for yes or n for no)? ")
        //checks if y, if it is then concats(adds) the numbers from the array above, to characterschoice arr
        } else if(numbersChoice === userAnsweryes) {
           charactersChoicearr = charactersChoicearr.concat(numbersPass);
       }
       //checks if working
       console.log(charactersChoicearr);
    
    //special character users choice, creates the variable for it
    var specialCharacterschoice = prompt("Would you like a symbol/special character in your new password(enter y for yes or n for no)? ");
    //changes to lowercase
    specialCharacterschoice = specialCharacterschoice.toLowerCase();
        //checks if y or n, if not reprompts
        if(!userAnswerno.includes(specialCharacterschoice) && !userAnsweryes.includes(specialCharacterschoice)) {
          alert("Not a choice");
          specialCharacterschoice = prompt("Would you like a symbol/special character in your new password(enter y for yes or n for no)? ");
        //checks if y, if it is then concats(adds) the special characters from the array above, to characterschoice arr
        } else if(specialCharacterschoice === userAnsweryes) {
          charactersChoicearr = charactersChoicearr.concat(specialCharacters);
        } 
        //checks if it is working. looks at the charactersarr in console log
        console.log(charactersChoicearr);

    if(charactersChoicearr == "" || charactersChoicearr == null) {
        alert("Didn't select anything, try again.");
        return;
    }
    //creating a charset with the characterschoice arrays
    var charset = charactersChoicearr.slice("");

    
    


    //checks charset
    console.log(charset);
   
    //the math part
    //for loop sets i to 0, the array charsets length is set to n then tells i is less than the password length
    for(var i = 0, n = charset.length; i < parseInt(passwordLength); ++i) {
        //random characters chosen from charset. adding it to retval
        retVal += charset[Math.floor(Math.random() * n)];
    }
    //check to see if it works, 
    console.log(retVal);
   }  
   return retVal;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
