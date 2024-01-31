//The function printMessage is passed to setTimeout the same as any other argument.
function printMessage() {
    console.log("The future is now!");
}

setTimeout(printMessage, 5000);


//This program has the same behavior as the one above. Instead of creating a named function and passing it to setTimeout, it creates an anonymous function within setTimeout’s argument list.
setTimeout(function () {
  console.log("The future is now!");
}, 5000);