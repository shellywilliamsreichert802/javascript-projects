// // Here we assign the method inside the constructor
// class AstronautI {
//    constructor(name, age, mass){
//      this.name = name;
//      this.age = age;
//      this.mass = mass;
//      this.reportStats = function() {
//        let stats = `${this.name} is ${this.age} years old and has a mass of ${this.mass} kg.`;
//          return stats;
//      }
//    }
//  }

//  let fox = new AstronautI('Fox', 7, 12);
//  console.log(fox.reportStats());

 
//  // Here we assign the method outside of the constructor
//  class AstronautO {
//    constructor(name, age, mass){
//      this.name = name;
//      this.age = age;
//      this.mass = mass;
//    }
 
//    reportStats() {
//      let stats = `${this.name} is ${this.age} years old and has a mass of ${this.mass} kg.`;
//      return stats;
//    }
//  }
 
// //  let fox = new AstronautI('Fox', 7, 12);
//  let hippo = new AstronautO('Hippo', 25, 1000);
 
//  console.log(fox);
//  console.log(hippo);

//  class Astronaut {
//   constructor(name, age, mass){
//      this.name = name;
//      this.age = age;
//      this.mass = mass;
//      this.reportStats = function() {
//         let stats = `${this.name} is ${this.age} years old and has a mass of ${this.mass} kg.`;
//         return stats;
//      }
//   }
// }


// console.log(fox.reportStats());

class Plant {
   constructor(type, height) {
      this.type = type;
      this.height = height;
   }

   grow() {
      this.height = this.height + 1;
   }
}