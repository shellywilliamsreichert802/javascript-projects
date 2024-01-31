let nums = [3.14, 42, 4811];

// TODO: Write a mapping function
// and pass it to .map()
let halved = nums.map(function(n) {
    return n/2;
});

console.log(halved);


// let nums = [3.14, 42, 4811];

// let timesTwo = function (n) {
//     return n*2;
// };

// let doubled = nums.map(timesTwo);

// console.log(nums);
// console.log(doubled);



// This program has the same output as the one immediately above. The mapping function is defined anonymously within the call to map.

// let nums = [3.14, 42, 4811];

// let doubled = nums.map(function (n) {
//     return n*2;
// });

// console.log(doubled);
