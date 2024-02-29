// Write your JavaScript code here.

// Get the button element by its id
let button = document.getElementById("take-off");

// Add a click event listener to the button
button.addEventListener("click", function() {
  // Display a confirmation dialog with the message
  let result = window.confirm("Confirm that the shuttle is ready for takeoff.");

  // If the user clicked OK, proceed with the launch
  if (result) {
    // Part b: Change the flight status to "Shuttle in flight."
    document.getElementById("flightStatus").innerHTML = "Shuttle in flight.";

    // Part c: Change the background color of the shuttle flight screen to blue
    document.getElementById("shuttleBackground").style.backgroundColor = "blue";

    // Part d: Increase the shuttle height by 10,000 miles
    // Get the current shuttle height from the element
    let shuttleHeight = Number(document.getElementById("spaceShuttleHeight").innerHTML);
    // Add 10,000 to the current height
    shuttleHeight += 10000;
    // Update the element with the new height
    document.getElementById("spaceShuttleHeight").innerHTML = shuttleHeight;
  }
});

// Remember to pay attention to page loading!
window.addEventListener("load", init);
