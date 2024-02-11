const test = require('../checkFive.js');
// const checkFive = require('../checkFive.js');

describe("checkFive", function() {
 it("should return 5 is equal to 5", function() {
    expect(test.checkFive(5)).toBe("5 is equal to 5.");
  
    //code here...
    });
 it("should return 2 is less than 5", function() {
    expect(test.checkFive(2)).toBe("2 is less than 5.");
 });   

 it("should return 15 is greater than 5", function() {
    expect(test.checkFive(15)).toBe("15 is greater than 5.");
 });   

 it("should return 17 is greater than 5", function() {
    expect(test.checkFive(  17)).toBe("17 is greater than 5.");
 });   

 });