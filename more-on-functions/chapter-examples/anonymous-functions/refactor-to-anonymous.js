// function reverse(str) {
//   let lettersArray = str.split('');
//   let reversedLettersArray = lettersArray.reverse();
//   return reversedLettersArray.join('');
// }

// console.log(reverse("LaunchCode"))

// function (str) same as (str)=> **remeber for anonymous functions to follow } with ;
// let reverse = (str) => {
//   let lettersArray = str.split('');
//   let reversedLettersArray = lettersArray.reverse();
//   return reversedLettersArray.join('');
// }
// console.log(reverse("Launchcode"));


let f1 = function(str) {
  return str + str;
};

let f2 = f1;
console.log(f2("abcd"));
// OR console.log(f1("abcd"));