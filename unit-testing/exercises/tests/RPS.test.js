const test = require('../RPS.js');


// it("returns 'Player 2 wins!'", function(){
//     expect(test.whoWon('rock', 'paper')).toBe("Player 2 wins!");
//     expect(test.whoWon('scissors', 'rock')).toBe("Player 2 wins!");
//     expect(test.whoWon('paper', 'scissors')).toBe("Player 2 wins!");

//  });

it("returns 'Player 2 wins!' if P1 = rock & P2 = paper", function(){
    // let output = test.whoWon('rock','paper');
    // expect(output).toBe("Player 2 wins!");
    expect(test.whoWon('rock', 'paper')).toBe("Player 2 wins!");

 });
 
 it("returns 'Player 2 wins!' if P1 = paper & P2 = scissors", function(){
    let output = test.whoWon('paper','scissors');
    expect(output).toBe("Player 2 wins!");
 });

 it("returns 'Player 2 wins!' if P1 = scissors & P2 = rock", function(){
    let output = test.whoWon('scissors', 'rock');
    expect(output).toBe("Player 2 wins!");
 });

 it("returns 'TIE' if P1 & P2 choose the same", function(){
    let output = test.whoWon('tie','tie');
    expect(output).toBe("TIE!");
 });


 it("returns 'Player 1 wins!' if the P2 doesn't win", function(){
    let output = test.whoWon('win','lose');
    expect(output).toBe("Player 1 wins!");
 });

