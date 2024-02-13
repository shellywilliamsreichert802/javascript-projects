//Declare a class called CrewCandidate with a constructor that takes three parameters—name, mass, and scores. Note that scores will be an array of test results.

class CrewCandidate {
    constructor(name, mass, scores){
      this.name = name;
      this.mass = mass;
      this.scores = (scores);

    }
 }
 
 
 let bear = new CrewCandidate('Bubba Bear', 135, [88, 85, 90]);
 let maltese = new CrewCandidate('Merry Maltese', 1.5, [93, 88, 97]); 
 let gator = new CrewCandidate('Glad Gator', 225, [75, 78, 62]);

 console.log(bear);
 console.log(maltese)
 console.log(gator);



//Add methods for adding scores, averaging scores and determining candidate status as described in the studio activity.

CrewCandidate.addNewScore.addScore = function(newScore) {
    // Use the push method to add the new score to the scores array
    this.scores.push(newScore);
  }
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