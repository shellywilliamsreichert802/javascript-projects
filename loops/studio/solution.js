const input = require('readline-sync');

// Part A: #1 Populate these arrays

let protein = ['chicken', 'pork', 'tofu', 'beef', 'fish', 'beans'];
let grains = ['rice', 'pasta', 'corn', 'potato', 'quinoa', 'crackers'];
let veggies = ['peas', 'green beans', 'kale', 'edamame', 'broccoli', 'asparagus'];
let beverages = ['juice', 'milk', 'water', 'soy milk', 'soda', 'tea'];
let desserts = ['apple', 'banana', 'more kale', 'ice cream', 'chocolate', 'kiwi'];


function mealAssembly(protein, grains, veggies, beverages, desserts, numMeals) {
  let pantry = [protein, grains, veggies, beverages, desserts];
  let meals = [];
  
  /// Part A #2: Write a ``for`` loop inside this function
  /// Code your solution for part A #2 below this comment (and above the return statement) ... Inside of mealAssembly(), write a for loop to assemble numMeals meals. - The meals must include one item from each category in the pantry array. - The computer needs to know how many crew members to prepare food for and what ingredients. Consider creating a nested loop that will create a meal for each crew member and then add it into a larger collection of meals.///
//let ingredients = [protein[0,0], grains[1,0],veggies[2,0], beverages[3,0], desserts[4,0]]
//for (let i = 0; i < 21; i++) { - console.log(i); - } -  return meals; - }//
for (let i = 0; i < numMeals; i++) {
  let newMeals =[];
for (let j = 0; j < pantry.length; j++) {
  newMeals.push(newMeals);
}
 // let numMeals = [protein[i], grains[i], veggies[i], beverages[i], desserts[i]];
  //meals[i] = numMeals;
  }
return meals;
}

function askForNumber() {
  numMeals = input.question("How many meals would you like to make: ");

while (numMeals > 6 || numMeals < 1) {
  numMeals = input.question("Invalid: pick between 1 and 6 meals to make: ");
}

return numMeals;
}


function generatePassword(string1, string2) {
  let code = '';
  
   /// CODE YOUR SOLUTION TO PART B here ///

  return code;
}
function runProgram() {

/// Code your Bonus Mission Solution here ///
  /// TEST PART A #2 HERE ///
  /// UNCOMMENT the two lines of code below that invoke the mealAssembly function (starting with 'let meals =') and print the result ///
  /// Change the final input variable (aka numMeals) here to ensure your solution makes the right number of meals ///
  /// We've started with the number 2 for now. Does your solution still work if you change this value? ///
  
 // let meals = mealAssembly(protein, grains, veggies, beverages, desserts, 2);
   //console.log(meals)
  

  /// TEST PART B HERE ///
  /// UNCOMMENT the next two lines to test your ``askForNumber`` solution ///
  /// Tip - don't test this part until you're happy with your solution to part A #2 ///
  
  let mealsForX = mealAssembly(protein, grains, veggies, beverages, desserts, askForNumber());
  console.log(mealsForX);

    /// TEST PART C HERE ///
  /// UNCOMMENT the remaining commented lines and change the password1 and password2 strings to ensure your code is doing its job ///

  // let password1 = '';
  // let password2 = '';
  // console.log("Time to run the password generator so we can update the menu tomorrow.")
  // console.log(`The new password is: ${generatePassword(password1, password2)}`);
}

module.exports = {
  protein: protein,
  grains: grains,
  veggies: veggies,
  beverages: beverages,
  desserts: desserts,
  mealAssembly: mealAssembly,
  askForNumber: askForNumber,
  generatePassword: generatePassword,
  runProgram: runProgram
};
