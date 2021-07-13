// Assignment Code
var generateBtn = document.querySelector("#generate");
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
function generatePassword(){
  var lowerCasedChar = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
  //iniate array
  var upperCasedChar = ['A','B','C','D','E','F','G','H','I','J','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
  var numericChar = ['1','2','3','4','5','6','7','8','9','0'];
  var specialChar = ['?',',','<','>',"'",'"',';',':','/','|','[',']','=','_','&','^','!','#','$','%','(',')','*','+','-','.','~','`','@','{','}'];
  var passwordLength = prompt ('How many characters would you like your password to be? Enter a number between 8 to 128.');
  
  //validation

  if (isNaN(passwordLength)) {
    alert ("Please enter a number between 8 and 128.");
    return;
  }
  
  if (passwordLength < 8) {
    alert ("The password must be greater than or equal to 8 digits.");
    return;
  }
  
  if (passwordLength > 128) {
    alert ("The password must be less than or equal to 128 digits.");
    return;
  }

  var wantLowerCase = confirm("Press OK to add lower case characters to your password.")
  var wantUpperCase = confirm("Press OK to add upper case characters to your password.")
  var wantSpecialChar = confirm("Press OK to add special characters to your password.")
  var wantNumeric = confirm("Press OK to add numeric characters to your password.")

  
  var mainArray = [];
  
  if (wantLowerCase) {
    mainArray = mainArray.concat(lowerCasedChar)
  }

  if (wantUpperCase) {
    mainArray = mainArray.concat(upperCasedChar)
  }

  if (wantNumeric) {
    mainArray = mainArray.concat(numericChar)
  }

  if (wantSpecialChar) {
    mainArray = mainArray.concat(specialChar)
  }

  console.log(mainArray + 'main array test')
  var password = [];
  // Write password to the #password input
  for (var i=0; i < passwordLength; i++) {
    var randomChar = Math.floor(Math.random() * mainArray.length);
    console.log(randomChar, "This is random number");
    password.push(String.fromCharCode(randomChar));
    //password += mainArray.toString(randomChar,randomChar+1);
  }
  return password.join("");
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
