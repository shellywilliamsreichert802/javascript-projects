//Try adding new properties inside constructor.
class Astronaut {
   constructor(name, age, mass, height){
     this.name = name;
     this.age = age;
     this.mass = mass;
     this.height = height
   }
}

let fox = new Astronaut('Fox', 7, 12, 24);
let hippo = new Astronaut('Hippo', 25, 1500, 90);

console.log(fox);
console.log(fox.age, fox.color);

fox.age = 9;
fox.color = 'red';
hippo.color = 'grey';

console.log(fox);
console.log(fox.age, fox.color);

console.log(typeof hippo, typeof fox);
console.log (hippo, fox)

//Try modifying or adding properties below.
