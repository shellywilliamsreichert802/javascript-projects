// function myFunction() {
//     let i = 10;
//     return 10 + i;
// }

// console.log(myFunction());


// let a = 0;

// function coolFunction() {
//     let b = 2;
//     return a + b;
// }

// function coolerFunction() {
//     let c = 5;
//     c += coolFunction();
//     return c;
// }

// console.log(coolFunction());
// console.log(coolerFunction());

function myFunction(n) {
    let a = 100;
    return a + n;
}

let x = 0;

x = myFunction(x);
console.log(x)
console.log(myFunction(x))