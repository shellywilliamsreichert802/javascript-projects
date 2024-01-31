// let objectName = {key1:value1, key2:value2, key3:value3, ... };
let tortoiseOne = {
   species: "Galapagos Tortoise",
   name: "Pete",
   weight: 919,
   age: 85,
   diet: ["pumpkins", "lettuce", "cabbage"]
};

console.log(tortoiseOne.weight);

newWeight = tortoiseOne.weight + 10;

tortoiseOne["weight"] = newWeight;

console.log(tortoiseOne["weight"]);

for (item in tortoiseOne) {
   console.log(item + ', ' + tortoiseOne[item]);
}

// objectName["new-key"] = propertyValue;

console.log(tortoiseOne);

tortoiseOne["age"] = 120;
tortoiseOne["speed"] = 'Faster than the hare.'

console.log(tortoiseOne);
console.log(tortoiseOne.age);

// // Using a for..in loop, iterate through each property in the tortoiseOne object and print the value to the console.
// for tortoiseOne[] (let i=0; i<tortoiseOne.length; i++) {
//    console.log(i);
// }

let giraffe = {
   species: "Reticulated Giraffe",
   name: "Cynthia",
   weight: 1500,
   age: 15,
   diet: "leaves"
 };
 giraffe.birthday = function () {age = age + 1;};

 console.log(giraffe);

 for (item in giraffe) {
    console.log(item + ", " + giraffe[item]);
 }
 
 function birthday(animal) {
     animal.age = animal.age + 1;
     return animal;
 }

 console.log(giraffe.age);

 birthday(giraffe);

 console.log(giraffe.age);

 console.log(giraffe)
//  objectName.birthday = function() {
//    age = age + 1;
//  };
 
let tortoiseTwo = {
   species: "Galapagos Tortoise",
   name: "Patricia",
   weight: 800,
   age: 85,
   diet: ["pumpkins", "lettuce", "cabbage"],
   sign: function() {
      return this.name + " is a " + this.species;
   }
 };

 tortoiseOne = {
   species: "Galapagos Tortoise",
   diet: ["pumpkins", "lettuce", "cabbage"]
};

tortoiseTwo = {
   species: "Galapagos Tortoise",
   diet: ["pumpkins", "lettuce", "cabbage"]
};

console.log(tortoiseOne === tortoiseTwo);
console.log(tortoiseOne == tortoiseTwo);
console.log(tortoiseOne === tortoiseTwo);
console.log((tortoiseOne.age === tortoiseTwo.age) + " tortoiseOne === tortoisTwo is true");