
// let launchcode = {
  
// }

// launchcode.test.js code: 
// const launchcode = require('../index.js'); 
// describe("Testing launchcode", function(){ 
//   // Write your unit tests here! 
//   it("should have the correct properties and values", function(){
//     expect(launchcode.organization).toBe("nonprofit");
//     expect(launchcode.executiveDirector).toBe("Jeff");
//     expect(launchcode.percentageCoolEmployees).toBe(100);
//     expect(launchcode.programsOffered).toEqual(["Web Development", "Data Analysis", "Liftoff"]);
//   });
//   it("should have a launchOutput method that returns a string", function(){
//     expect(typeof launchcode.launchOutput).toBe("function");
//     expect(typeof launchcode.launchOutput()).toBe("string");
//   });
// });

const launchcode = 
{
    organization: 'nonprofit',
    executiveDirector: 'Jeff',
    percentageCoolEmployees: 100,
    programsOffered: ['Web Development', 'Data Analysis', 'Liftoff'],
    launchOutput: function(){
      return `LaunchCode is a ${this.organization} that offers ${this.programsOffered.join(', ')} programs. The executive director is ${this.executiveDirector} and ${this.percentageCoolEmployees}% of the employees are cool.`;
    }
  };
  
module.exports = launchcode;
