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
superChimpOne['astronautID'] = 1;
salamander['astronautID'] = 2;
superChimpTwo['astronautID'] = 3;
dog['astronautID'] = 4;
waterBear['astronautID'] = 5;
// let animals = [waterBear, dog, salamander, superChimpOne, superChimpTwo];
// animals.forEach((animal) => {
//    animal.astronautID = Math.floor(Math.random() * 11);
//  });
//  animals.forEach((animal) => {
//    animal.move = Math.floor(Math.random() * 11);
//  });
 // move: function () {return Math.floor(Math.random() * 11)}
//  console.log(animals);
superChimpOne['move'] = function () {return Math.floor(Math.random() * 11)};
salamander['move'] = function () {return Math.floor(Math.random() * 11)};
superChimpTwo['move'] = function () {return Math.floor(Math.random() * 11)};
dog['move'] = function () {return Math.floor(Math.random() * 11)};
waterBear['move'] = function () {return Math.floor(Math.random() * 11)};

// Create an array to hold the animal objects.
let crewMember = [superChimpOne, superChimpTwo, salamander, dog, waterBear];
console.log(crewMember)

// Print out the relevant information about each animal.
function crewReports(animal) {
   return `${animal.name} is a ${animal.species}. They are ${animal.age} years old and ${animal.mass} kilograms. Their ID is ${animal.astronautID}.`;
 }

 console.log(crewReports(crewMember[0]));
 console.log(crewReports(crewMember[1]));
 console.log(crewReports(crewMember[2]));
 console.log(crewReports(crewMember[3]));
//  console.log(crewReports(crew(waterBear)));

 // try a for loop?    
// for (let i = 0; i < crewReports.length; i++) {
   // }
   // console.log(crewReports(crew));
   // UNDEFINED , i throws not defined error

// Start an animal race!

// Before these animal astronauts can get ready for launch, they need to take a physical fitness test. Define a fitnessTest function that takes an array as a parameter.

// Within the function, race the five animals together by using the move method. An animal is done with the race when they reach 20 steps or greater. Store the result as a string: '____ took ____ turns to take 20 steps.' Fill in the blanks with the animal’s name and race result. Create a new array to store how many turns it takes each animal to complete the race.

// Return the array from the function, then print the results to the console (one animal per line).
// let animalArray = [superChimpOne, superChimpTwo, salamander, dog, waterBear];
function fitnessTest(crewArr) {
   let results = [];

   for (const crewMember of crewArr) {}
     let steps = 0;
     let turns = 0;
     while (steps < 20) {
       steps += crewMember.move();
       turns++;
     }
     results.push(`${crewMember.name} took ${turns} turns to take 20 steps.`);
   
   // crewArr.forEach(crewMember => {
   //    let steps = 0;
   //    let turns = 0;
   //    while (steps <=0) {
   //       steps += crewMember.move();
   //       turns++
   //    }
   // });
      return results;
}
 fitnessTest(crewMember).map(result => {
   console.log(result);
 });

fitnessTest(crewMember).forEach(result => {
  console.log(result);
});


   console.log(`${crewMember.name} took ${turns} turns to take 20 steps.`);