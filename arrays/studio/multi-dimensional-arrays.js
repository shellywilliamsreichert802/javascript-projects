let food = "water bottles,meal packs,snacks,chocolate";
let equipment = "space suits,jet packs,tool belts,thermal detonators";
let pets = "parrots,cats,moose,alien eggs";
let sleepAids = "blankets,pillows,eyepatches,alarm clocks";

//1) Use split to convert the strings into four cabinet arrays. Alphabetize the contents of each cabinet.
console.log(food.split(',').sort());
console.log(equipment.split(',').sort());
console.log(pets.split(',').sort());
console.log(sleepAids.split(',').sort());

//2) Initialize a cargoHold array and add the cabinet arrays to it. Print cargoHold to verify its structure.
let cargoHold = ['oxygen tanks', 'space suits', 'instruction manual', 'security blanket'];
console.log(cargoHold);

//3) Query the user to select a cabinet (0 - 3) in the cargoHold.
const input = require('readline-sync');

let n = input.question (`Select a cabinet (0-3) in the cargoHold: `);

//4) Use bracket notation and a template literal to display the contents of the selected cabinet. If the user entered an invalid number, print an error message.
let arrays = (food, equipment, pets, sleepAids, cargoHold);
console.log(cargoHold.length)

if (n = arrays) {
    console.log(`${n} is an invalid number! Defaulting to 3.`);
    n = 3;
}

//5) CODE NEEDS WORK! Modify the code to query the user for BOTH a cabinet in cargoHold AND a particular item. Use the 'includes' method to check if the cabinet contains the selected item, then print “Cabinet ____ DOES/DOES NOT contain ____.”

let p = input.question("Selcet a cabinet in the cargoHold and a particular item: ");
let check = ('oxygen tanks'|| 'space suits' || 'instruction manual' || 'security blanket');
	let output ='';

if (check.includes(('oxygen tanks'|| 'space suits' || 'instruction manual' || 'security blanket'))) {;
    console.log(`Cabinet cargoHold DOES contain ${check}.`);
} else {
    console.log(`Cabinet cargoHold DOES NOT contain ${check}.`);
}
