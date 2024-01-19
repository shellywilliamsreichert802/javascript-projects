const input = require('readline-sync');
let str = "LaunchCode";

//1) Use string methods to remove the first three characters from the string and add them to the end.
//Hint - define another variable to hold the new string or reassign the new string to str.
strNew = str.slice(3) + str.slice(0,3);
console.log(strNew);
//console.log(str.split('')); (10) ['L', 'a', 'u', 'n', 'c', 'h', 'C', 'o', 'd', 'e']
console.log(str.split(''));
//console.log(str.slice(3)); nchCode
console.log(str.slice(3));
//console.log(`${str.slice(3)}${str.slice(str.indexOf('Lau'),str.indexOf('Lau')+3)}`) nchCodeLau
console.log(`${str.slice(3)}${str.slice(str.indexOf('Lau'),str.indexOf('Lau')+3)}`);

//console.log(str.slice(1,3)); au
console.log(str.slice(1,3));
//console.log(str); LaunchCode
console.log(str);
//str = str.split("'Lau")
console.log(str.split("Lau"));
//Use a template literal to print the original and modified string in a descriptive phrase.
console.log(`'${str} has a length of ${str.length} and in Pig Latin, '${strNew}' also has a length of ${strNew.length}'`);


//2) Modify your code to accept user input. Query the user to enter the number of letters that will be relocated.

let n = input.question("How many letters will be relocated? ");

//3) Add validation to your code to deal with user inputs that are longer than the word. In such cases, default to moving 3 characters. Also, the template literal should note the error.

if (n > str.length) {
    console.log(`${n} is too many letters! Defaulting to 3.`);
    n = 3;
}

letnewStr = str.slice(n) + str.slice(0,n);