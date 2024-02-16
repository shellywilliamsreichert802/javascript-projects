//Declare a class called CrewCandidate with a constructor that takes three parameters—name, mass, and scores. Note that scores will be an array of test results.

///***Define a class named CrewCandidate

class CrewCandidate {
    constructor(name, mass, scores){
      this.name = name;
      this.mass = mass;
      this.scores = scores;

    }
  }
  
 //Add methods for adding scores, averaging scores and determining candidate status as described in the studio activity.

  /// ***Define an addScore method outside of the constructor
//  addScore(newScore) {

  CrewCandidate.prototype.addScore = function(newScore) {
      // Use the push method to add the new score to the scores array

  ///*** Use the push array method to add the score to this.scores
      this.scores.push(newScore);
    };
 
///***Create instances of crewCandiates
 let bear = new CrewCandidate('Bubba Bear', 135, [88, 85, 90]);
 let maltese = new CrewCandidate('Merry Maltese', 1.5, [93, 88, 97]); 
 let gator = new CrewCandidate('Glad Gator', 225, [75, 78, 62]);

 console.log(bear);
 console.log(maltese)
 console.log(gator);

 ///***test addScore method by adding 83 score to bear and print new score array 

 bear.addScore(83);
console.log(bear.scores);

// create average () method on the prototype
CrewCandidate.prototype.average = function() {
// use reduce () to sum up scores
let sum = this.scores.reduce((a, b) => a + b, 0);
// divide by length of scores in array
let avg = (sum / this.scores.length).toFixed(1);
// return average
return avg;
}

// 

console.log(bear.average());

  // Add a method to indicate if the candidate should be admitted
  CrewCandidate.prototype.status = function() {
    // Get the average test score by calling the average method
    let avg = this.average();
    // Declare a variable to store the status
    let status;
    // Use if-else statements to assign the status based on the average
    if (avg >= 90) {
      status = "Accepted";
    } else if (avg >= 80) {
      status = "Reserve";
    } else if (avg >= 70) {
      status = "Probationary";
    } else {
      status = "Rejected";
    }
    // Return the status as a string
    return status;
  }

console.log(bear.status())



// Test the status method on each candidate
// console.log(`${bear.name} earned an average test score of ${bear.average()}% and has a status of ${bear.status()}.`);
// console.log(`${maltese.name} earned an average test score of ${maltese.average()}% and has a status of ${maltese.status()}.`);
// console.log(`${gator.name} earned an average test score of ${gator.average()}% and has a status of ${gator.status()}.`);

const candidates = [bear, maltese, gator]
// Loop through the candidates array and test the status method
for (let candidate of candidates) {
  // Use a template literal to print out the result
  console.log(`${candidatename} earned an average test score of ${candidate.average}% and has a status of ${candidate.status}.`);
}


  // Add a method to average the test scores
  // average() {
  //   // Use the reduce method to sum up the scores
  //   let sum = this.scores.reduce((a, b) => a + b, 0);
  //   // Divide the sum by the number of scores and round to 1 decimal place
  //   let avg = (sum / this.scores.length).toFixed(1);
  //   // Return the average as a number
  //   return Number(avg);
  // }

//   // Add a method to indicate if the candidate should be admitted
//   status() {
//     // Get the average test score by calling the average method
//     let avg = this.average();
//     // Declare a variable to store the status
//     let status;
//     // Use if-else statements to assign the status based on the average
//     if (avg >= 90) {
//       status = "Accepted";
//     } else if (avg >= 80) {
//       status = "Reserve";
//     } else if (avg >= 70) {
//       status = "Probationary";
//     } else {
//       status = "Rejected";
//     }
//     // Return the status as a string
//     return status;
//   }
// }
// class Manuel extends Book {
// 	constructor(title, author, copyright, isbn, pages, timesCheckedOut, discarded) {
//         super(title, author, copyright, isbn, pages, timesCheckedOut, discarded);
//     }
// 	dispose(currentYear) {
//         if (currentYear - this.copyright > 5) {
//             this.discarded = 'Yes';
//         }
// 	}
// }

// class Novel extends Book {
// 	constructor(title, author, copyright, isbn, pages, timesCheckedOut, discarded) {
//     super(title, author, copyright, isbn, pages, timesCheckedOut, discarded);
//     }
//     dispose() {
//         if(this.timesCheckedOut > 100) {
//             this.discarded = 'Yes'
//         }
//     }
// 	}


// //Part 4 - Use the methods to boost Glad Gator’s status to Reserve or higher. How many tests will it take to reach Reserve status? How many to reach Accepted? Remember, scores cannot exceed 100%.