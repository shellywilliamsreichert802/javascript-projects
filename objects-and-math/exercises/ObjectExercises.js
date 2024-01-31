let superChimpOne = {
   name: "Chad",
   species: "Chimpanzee",
   mass: 9,
   age: 6
};

let salamander = {
   name: "Lacey",
   species: "Axolotl Salamander",
   mass: 0.1,
   age: 5
};

let superChimpTwo = {
   name: 'Brad',
   species: 'Chimpanzee',
   mass: 11,
   age: 6
};

let dog = {
   name: "Leroy",
   species: "Beagle",
   mass: 14,
   age: 5
};

let waterBear = {
   name: "Almina",
   species: "Tardigrade",
   mass: 0.0000000001,
   age: 1
};

// After you have created the other object literals, add the astronautID property to each one.
let animals = [waterBear, dog, salamander, superChimpOne, superChimpTwo];
animals.forEach((animal) => {
   animal.astronautID = Math.floor(Math.random() * 11);
 });
 animals.forEach((animal) => {
   animal.move = Math.floor(Math.random() * 11);
 });
 // move: function () {return Math.floor(Math.random() * 11)}
//  console.log(animals);


// Create an array to hold the animal objects.
let crew = [superChimpOne, superChimpTwo, salamander, dog, waterBear];
console.log(crew)

// Print out the relevant information about each animal.
function crewReports(animal) {
   return `${animal.name} is a ${animal.species}. They are ${animal.age} years old and ${animal.mass} kilograms. Their ID is ${animal.astronautID}.`;
 }

 console.log(crewReports(crew[0]));
 console.log(crewReports(crew[1]));
 console.log(crewReports(crew[2]));
 console.log(crewReports(crew[3]));
 console.log(crewReports(crew[4]));

 // try a for loop?    
// for (let i = 0; i < crewReports.length; i++) {
   // }
   // console.log(crewReports(crew));
   // UNDEFINED , i throws not defined error

// Start an animal race!

// Before these animal astronauts can get ready for launch, they need to take a physical fitness test. Define a fitnessTest function that takes an array as a parameter.

// Within the function, race the five animals together by using the move method. An animal is done with the race when they reach 20 steps or greater. Store the result as a string: '____ took ____ turns to take 20 steps.' Fill in the blanks with the animal’s name and race result. Create a new array to store how many turns it takes each animal to complete the race.

// Return the array from the function, then print the results to the console (one animal per line).

function fitnessTest(animalArray) {
   let results = [];
   for (let i = 0; i < animalArray.length; i++) {
     let numSteps = 0;
     let turns = 0;
     while (numSteps < 20) {
       numSteps += animalArray[i].move();
       turns++;
     }
     results.push(`${animalArray[i].name} took ${turns} turns to take 20 steps.`);
   }
   return results;
 }
 
 