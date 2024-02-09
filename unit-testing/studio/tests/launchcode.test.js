
// launchcode.test.js code: 
const launchcode = require('../index.js'); 
const assert = require('assert');

describe("Testing launchcode", function()
{ 
  // Write your unit tests here! 
  // it("should have the correct organization property with value 'nonprofit'", function(){
  //   expect(launchcode.organization).toEqual("nonprofit");
  // });

  it("should have organization property with value 'nonprofit'", function(){
    assert.equal(launchcode.organization, 'nonprofit');
  });
  it("should have executiveDirector property with value 'Jeff'", function(){
    assert.equal(launchcode.executiveDirector, 'Jeff');
  });
  it("should have the correct percentageCoolEmployees", function(){
        assert.equal(launchcode.percentageCoolEmployees, '100');
      });
  
  // it("should have executiveDirector property with value 'Jeff'", function(){
  //   expect(launchcode.executiveDirector).toEqual('Jeff');
  // });
  // Add more tests for other properties and methods here
});  
//   it("should have the correct executiveDirector", function(){
//     expect(launchcode.executiveDirector).toEqual("Jeff");
//   });
//   it("should have the correct percentageCoolEmployees", function(){
//     expect(launchcode.percentageCoolEmployees).toEqual(100);
//   });
//   it("should have the correct programsOffered", function(){
//     expect(launchcode.programsOffered).toEqual(["Web Development", "Data Analysis", "Liftoff"]);
//   });
//   it("should have a launchOutput method that returns a string", function(){
//     expect(typeof launchcode.launchOutput()).toEqual("string");
// //   });
// });
