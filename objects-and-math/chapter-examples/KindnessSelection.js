function randomSelection(arr){
   let index = Math.floor(Math.random()*arr.length);
   return arr[index];
 }
 
 let happiness = ['Hope', 'Joy', 'Peace', 'Love', 'Kindness', 'Puppies', 'Kittens', 'Tortoise'];
 
 let words = ['Hello', 'World', 'Python', 'JavaScript', 'Rutabaga'];
 
//  for (i=0; i < 8; i++){
//    console.log(randomSelection(happiness));
//  }
 
 //Experiment with the code above. Try to:
 //a) Print 3 random selections from each array.
 for (i=0; i < 3; i++){
  console.log(randomSelection(happiness));
}


 for (i=0; i < 3; i++){
  console.log(randomSelection(words));
}
 //b) Have the code randomly pick one array, and then print 2 random items from it.

let selectedArray = randomSelection([happiness, words]);
let randomIndex1 = Math.floor(Math.random() * selectedArray.length);
let randomIndex2 = Math.floor(Math.random() * selectedArray.length);

console.log(`Two random items from the selected array are ${selectedArray[randomIndex1]} and ${selectedArray[randomIndex2]}.`);


 //c) Create a new array, then fill it with one random item from words and happiness. Print the new array.


let newArray = randomSelection(words, happiness);
console.log(newArray);



