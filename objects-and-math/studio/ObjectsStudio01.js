// Code your selectRandomEntry function here:

// function randomSelection(arr) {
//   let index = Math.floor(Math.random() * arr.length);
//   return arr[index];
// }
// function selectRandomEntry(idNumbers) {
//   let index = Math.floor(Math.random() * idNumbers.length);
//   return idNumbers[index];
// }

js 
function selectRandomEntry(originalArray) {
    let randomEntry = originalArray[Math.floor(Math.random() * originalArray.length)]; 
    return randomEntry;; 
 }

// Code your buildCrewArray function here:

// let idNumbers = [291, 414, 503, 599, 796, 890];
// let luckyIDs = [];
//   while(luckyIDs.length < 3) {
//     luckyIDs.push(selectRandomEntry(idNumbers));
//   }
// }
//   return [luckyIDs];
// }

let selectedIDs = buildCrewArray();
console.log(selectedIDs);
// Call the function three times to select three ID numbers. Store these selections in a new array, making sure to avoid repeated numbers. No animal can be selected more than once!

// Code your buildCrewArray function here:
function buildCrewArray (ids, candidates) {
  let crew = []
  for (candidate of candidates) {
    if (ids.includes(candidate.astronautID)) {
      crew.push(candidate);
    }
  }
  return crew;
}

// for (i = 0; i < 4; i ++) {
//   console.log(randomSelection(idNumbers));
// }

let i =0
while (i < 4) {
  if idNumbers[i] != idNumbers }
  console.log(i); 
  i++;{
  }

// not crewids includes so don't have to write mutiple lines
if arrayName.includes(item)
while (idNumbers < 20) {
  steps += crewMember.move();
  turns++;
}
results.push(`${crewMember.name} took ${turns} turns to take 20 steps.`);

// Here are the candidates and the 'animals' array:
let candidateA = {
  'name':'Gordon Shumway',
  'species':'alf',
  'mass':90,
  'o2Used':function(hrs){return 0.035*hrs},
  'astronautID':414
};
let candidateB = {
  'name':'Lassie',
  'species':'dog',
  'mass':19.1,
  'o2Used':function(hrs){return 0.030*hrs},
  'astronautID':503
};
let candidateC = {
  'name':'Jonsey',
  'species':'cat',
  'mass':3.6,
  'o2Used':function(hrs){return 0.022*hrs},
  'astronautID':796
};
let candidateD = {
  'name':'Paddington',
  'species':'bear',
  'mass':31.8,
  'o2Used':function(hrs){return 0.047*hrs},
  'astronautID':291
};
let candidateE = {
  'name':'Pete',
  'species':'tortoise',
  'mass':417,
  'o2Used':function(hrs){return 0.010*hrs},
  'astronautID':599
};
let candidateF = {
  'name':'Hugs',
  'species':'ball python',
  'mass':2.3,
  'o2Used':function(hrs){return 0.018*hrs},
  'astronautID':890
};

let animals = [candidateA,candidateB,candidateC,candidateD,candidateE,candidateF];


// Code your template literal and console.log statements:
