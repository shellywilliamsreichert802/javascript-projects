const input = require('readline-sync');

function getValidInput(prompt, isValid) {
    
    let userInput = input.question(prompt);

    while (!isValid(userInput)) {
      console.log("Invalid input. Try again.");
      userInput = input.question(prompt);
    }

    return userInput;
}

let isValidPassword = function(password) {
    // Passwords should have at least 8 characters
//     if (password.length < 8) {
//     return false;
//     }

//     return true;
// };


// TODO 1: write a validator 
// that ensures input starts with "a"
  // if (input.charAt(0) === "a") {
  //   return true;
  // } 
  //   return false;
  // };
  // console.log(getValidInput('Create a password:', isValidPassword));




// TODO 2: write a validator 
// that ensures input is a vowel

// if (input.char.toLowerCase() == ['a', 'e', 'i', 'o', 'u']) {
  // ***NOT WORKING
let vowels = ['a', 'e', 'i', 'o', 'u'];
  for (let i = 0; i < password.length; i++) {
    if (vowels.includes(password[i].toLowerCase())) {
      return true;
    }
  }
  return false;
};

console.log(getValidInput('Create a password:', isValidPassword));

// Be sure to test your code!
