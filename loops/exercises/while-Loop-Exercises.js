//Define three variables for the LaunchCode shuttle - one for the starting fuel level, another for the number of astronauts aboard, and the third for the altitude the shuttle reaches.
const input = require('readline-sync');

let startingFuelLevel = Number(input.question('Enter a starting fuel level: '));
let astronautsAboard = '';
let shuttleAltitude = '';



/*Exercise #4: Construct while loops to do the following:
  a. Query the user for the starting fuel level. Validate that the user enters a positive, integer value greater than 5000 but less than 30000. while (fuelLevel <= 5000 || fuelLevel > 30000 || isNaN(fuelLevel)) {
   fuelLevel = input.question("Enter the starting fuel level: ");
}*/
while (startingFuelLevel < 5000 || startingFuelLevel > 30000 || isNaN(startingFuelLevel)) {
   if (isNaN(startingFuelLevel)) {
      startingFuelLevel = input.question ('Only numbers. Please enter a number: ');
   } else if (startingFuelLevel < 5000) {
         startingFuelLevel = input.question('Below 5000 is not allowed. Reenter a number: ');
   } else if (startingFuelLevel > 30000) {
      startingFuelLevel = input.question('Over 30000 not allowed. Reenter a number: ');
   }
}

console.log(`Fuel level: ${startingFuelLevel}`);

//b. Use a second loop to query the user for the number of astronauts (up to a maximum of 7). Validate the entry.
while (astronautsAboard > 7 || astronautsAboard < 0 || isNaN(astronautsAboard)) {
   if (isNaN(astronautsAboard)) {
      astronautsAboard = input.question ('Only numbers. Please enter a number: ');
   } else if (astronautsAboard > 7) {
         astronautsAboard = input.question('No more than 7 astronauts allowed. Reenter a number: ');
   } else if (astronautsAboard < 0) {
      astronautsAboard = input.question('No less than than 0 astronauts allowed. Reenter a number: ');
   }
}

  console.log(`Astronauts aboard: ${astronautsAboard}`);
  
//c. Use a final loop to monitor the fuel status and the altitude of the shuttle. Each iteration, decrease the fuel level by 100 units for each astronaut aboard. Also, increase the altitude by 50 kilometers.

let altitude = 0;
let currentFuelLevel = startingFuelLevel;
while (currentFuelLevel = (100 * astronautsAboard) > 0) {
   altitude = altitude + 50;
   currentFuelLevel = currentFuelLevel - (100 * astronautsAboard);
  //console.log(`***current fuel level: ${currentFuelLevel}, cuurent altitude: ${altitude}`)
}

console.log
/*Exercise #5: Output the result with the phrase, “The shuttle gained an altitude of ___ km.”

If the altitude is 2000 km or higher, add “Orbit achieved!” Otherwise add, “Failed to reach orbit.”*/
