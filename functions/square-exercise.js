// function makeLine(lineExactlySizeHashes) {
   // for (let i = 0; i < lineExactlySizeHashes.length; i++) {
    //    console.log(makeLine(5));;
  //  }
//}
//function printLineOfHashes(length) {
  //  console.log("#".repeat(length));
  //}
  //printLineOfHashes(5)
  function makeLine(size) {
    let line = '';
    for (let i = 0; i < size; i++) {
      line += '#';
    }
    return line;
  }
  console.log(makeLine(5));

console.log('---------------');
  //function makeSquare(size) {
    //let square = ''
    //("#".repeat(size) + "\\n").repeat(size);
  //}
  //console.log(makeSquare)
  
  function makeSquare(size) {
    let square = "";
    for (let i = 0; i < size; i++) {
    square += makeLine(size) + '\n';
    }
    return square;
  }
console.log(makeSquare(5));

console.log('-----------');

function makeRectangle(width, height) {
    let rectangle = '';
    for (let i = 0; i < height; i++) {
      rectangle += (makeLine(width) + '\n');
    }
    return rectangle.slice(0, -1);
  }
  console.log(makeRectangle(5, 3));

  //Now, go back and rewrite makeSquare to use makeRectangle.----does not print when modified to...
//function makeRectangle(size) {
  //  let rectangle = "";
    //for (let i = 0; i < size; i++) {
    //rectangle += makeLine(size) + '\n';
    //}
    //return rectangle;
  //}
//console.log(makeRectangle(5));
  
