function gradeLabs(labs) {
  for (let i=0; i < labs.length; i++) {
    let lab = labs[i];
    let result = lab.runLab(3);
    console.log(`${lab.student} code worked: ${result === 27}`);
  }
}

let studentLabs = [
  {
    student: 'Carly',
    runLab: function (num) {
        return Math.pow(num, num);
    }
  },
  {
    student: 'Erica',
    runLab: function (num) {
        return num * num;
    }
  }
];

gradeLabs(studentLabs);

let studentLabs2 = [
  {
      student: 'Blake',
      myCode: function (num) {
        return Math.pow(num, num);
      }
  },
  {
      student: 'Jessica',
      runLab: function (num) {
        return Math.pow(num, num);
      }
  },
  {
      student: 'Mya',
      runLab: function (num) {
        return num * num;
      }
  }
];

gradeLabs(studentLabs2);

function gradeLabs(labs) {
  for (let i = 0; i < labs.length; i++) {
      let lab = labs[i];
      let result;

      try {
          // Attempt to run the lab
          result = lab.runLab(3) === 27;
          console.log(`${lab.student}'s code worked: ${result}`);
      } catch (error) {
          // Handle the exception when runLab property is not defined
          console.log("Error thrown!");
          result = "Error thrown";
      }
  }
}

// Example usage:
// const labsData = [
//   { student: "Alice", runLab: (x) => x * 9 }, // Example lab with runLab property
//   // Add more lab objects here...
// ];

// gradeLabs(labsData);
