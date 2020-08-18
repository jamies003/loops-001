// give the total score of each row in the gameboard

let gameBoard = [[7, 13, 8, 11],
[22, 14, 18, 11],
[23, 2, 8, 7],
[12, 5, 1, 19]];

let totalScore = 0;

for (let i = 0; i < gameBoard.length; i++) {
  let gameRows = gameBoard[i];
  for (let j = 0; j < gameRows[i].length; j ++) {

    totalScore += gameRows[i][j];
    console.log(gameBoard[i][j]);
  }
}
console.log(totalScore);