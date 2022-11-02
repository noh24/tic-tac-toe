//Business
id = 00; id = 01; id = 02;
id = 10; id = 11; id = 12;
id = 20; id = 21; id = 22; 
1 = X
2 = O
function GameBoard() {
  this.space = [[0,0,0],[0,0,0],[0,0,0]];
  this.playerTurn = 1;
  this.currentSymbol = "X";
  this.totalSymbols = 0;
}

GameBoard.prototype.assignSymbol = function(event) {
  let x = parseInt(Number(event.target.id) / 10); 
  let y = Number(event.target.id) % 10;
  
  if (this.space[x][y] > 0 ) {
    return false 
  } else {
    if (this.playerTurn % 2 === 1 )  {
      this.space[x][y] = "X";
      playerTurn++;
    } else {
      this.space[x][y] = "O";
      playerTurn++;
    }
  }
  checkWin(x, y);
}

function checkWin(x, y) {
  if(checkRow(x) || checkColumn(y) || checkEdge(x,y) || checkMiddle())
}
function checkRow(x) {
  for (let i = 0; i < 3; i++) { //checking the row 
    if (spaces[x][i] !== gameBoard.currentSymbol) {
      return false;
    }
  }
  return true;
}
function checkColumn(y) {
  for (let i = 0; i < 3; i++) { //checking the row 
    if (spaces[i][y] !== gameBoard.currentSymbol) {
      return false;
    }
  }
  return true;
}


let gameBoard = new GameBoard();



















































isTerminal() {
  //Return False if board in empty
  if (this.isEmpty()) return false;
  //Checking Horizontal Wins
  if (this.state[0] === this.state[1] && this.state[0] === this.state[2] && this.state[0]) {
    return { 'winner': this.state[0], 'direction': 'H', 'row': 1 };
  }
  if (this.state[3] === this.state[4] && this.state[3] === this.state[5] && this.state[3]) {
    return { 'winner': this.state[3], 'direction': 'H', 'row': 2 };
  }
  if (this.state[6] === this.state[7] && this.state[6] === this.state[8] && this.state[6]) {
    return { 'winner': this.state[6], 'direction': 'H', 'row': 3 };
  }
//Checking Vertical Wins
if(this.state[0] === this.state[3] && this.state[0] === this.state[6] && this.state[0]) {
  return {'winner': this.state[0], 'direction': 'V', 'column': 1};
}
if(this.state[1] === this.state[4] && this.state[1] === this.state[7] && this.state[1]) {
  return {'winner': this.state[1], 'direction': 'V', 'column': 2};
}
if(this.state[2] === this.state[5] && this.state[2] === this.state[8] && this.state[2]) {
  return {'winner': this.state[2], 'direction': 'V', 'column': 3};
}

//Checking Diagonal Wins
if(this.state[0] === this.state[4] && this.state[0] === this.state[8] && this.state[0]) {
  return {'winner': this.state[0], 'direction': 'D', 'diagonal': 'main'};
}
if(this.state[2] === this.state[4] && this.state[2] === this.state[6] && this.state[2]) {
  return {'winner': this.state[2], 'direction': 'D', 'diagonal': 'counter'};
}

//If no winner but the board is full, then it's a draw
if(this.isFull()) {
    return {'winner': 'draw'};
}

//return false otherwise
return false;
}