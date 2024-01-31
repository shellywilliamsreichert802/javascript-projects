//Create an anonymous function and set it equal to a variable.

/* Your function should:
a) If passed a number, return the tripled value.
b) If passed a string, return the string “ARRR!”
c) Be sure to test your function before moving on the next part. 
*/

/* Add to your code! Use your fuction and the map method to change an array  as follows:
a) Triple any the numbers.
b) Replace any strings with “ARRR!”
c) Print the new array to confirm your work.
*/

let tripleAndReplace = function(myArr) {
    if (typeof myArr === 'number') {
        return myArr * 3;
    } else if (typeof myArr === 'string') {
        return "ARRR!"
    } else {
        return myArr;
    }
}
let arr = ['Elocution', 21, 'Clean teeth', 100];

arr = arr.map((element) => {
    return tripleAndReplace(element);
});   
    console.log(arr);
  



