// Assignment Code
document.querySelector("#generate").addEventListener("click", writePassword);

let low = "abcdefghijklmnopqrstuvwxyz";
let lowCase = low.split('');
let up = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
let upCase = up.split('')
let numStr = "123456789";
let nums = numStr.split('');
let spcChar = ["!", "%", "&", ",", "*", "+", "-", ".", "/", "<", ">", "?","~"];

// Write password to the #password input

function generatePassword() {

  let length = prompt("How many characters would you like in your password?");
  while (length <= 7 || length >= 128) {
    alert("Sorry, your password must be between 8 and 128 characters");
    let length = prompt("How many characters would you like in your password?");
  }
  function confirmChars(newVariable, charType) {
  newVariable = confirm("Would you like " + charType + "?")
  }
  let confirmSpecial = confirm("Would you like to add special characters?")
  let confirmUpper = confirm("Would you like to add upper case letters?")
  let confirmLower = confirm("Would you like to add lower case characters characters?")
  let confirmNum = confirm("Would you like to add number?")

  while (confirmSpecial !== true && confirmUpper !== true && confirmLower !== true && confirmNum !== true) {
    confirmSpecial = confirm("Would you like to add special characters?")
    confirmUpper = confirm("Would you like to add upper case letters?")
    confirmLower = confirm("Would you like to add lower case characters characters?")
    confirmNum = confirm("Would you like to add number?")
  }
  let charMaster = lowCase.concat(upCase, nums, spcChar)
  console.log(charMaster)
  let randomPass = ''
  for (let i = 0; i < length; i++) {
    randomPass = randomPass + charMaster[Math.floor(Math.random() * charMaster.length)]
    console.log(randomPass)
  }
  return randomPass;
}
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}