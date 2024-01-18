// Initialize Variables below
let date = "Monday 2019-03-18';
let time = "10:05:34 AM";
let astronautCount = 7;
astronautStatus = "ready";
let averageAstronautMassKg = 80.7;
let crewMassKg	= ("astronautCount * averageAstronautMassKg");
let fuelMassKg = 760000;
shuttleMassKg = 74842.31;
totalMassKg	= ("crewMassKg + fuelMassKg + shuttleMassKg");
maximumMassLimit = 850000;
fuelTempCelsius	= -225;
minimumFuelTemp = -300;
maximumFuelTemp	= -150;
fuelLevel = ("100%");
weatherStatus = ("clear");
preparedForLiftOff	("true");
"
// add logic below to verify total number of astronauts for shuttle launch does not exceed 7

if (astronautCount > 7) {
    preparedForLiftOff = false
} else {
    console.log(preparedForLiftOff)
}


// add logic below to verify all astronauts are ready

if (astronautStatus > 7) {
    preparedForLiftOff = false
} else {
    console.log(preparedForLiftOff)
}
// add logic below to verify the total mass does not exceed the maximum limit of 850000

// add logic below to verify the fuel temperature is within the appropriate range of -150 and -300

// add logic below to verify the fuel level is at 100%

// add logic below to verify the weather status is clear

// Verify shuttle launch can proceed based on above conditions
