//Business
// id = 00; id = 01; id = 02;
// id = 10; id = 11; id = 12;
// id = 20; id = 21; id = 22;
// 1 = X
// 2 = O
function GameBoard() {
  this.space = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];
  this.playerTurn = 1;
  this.currentSymbol = "X";
  this.totalSymbols = 0;
  //boolean gameOver
  //string winner
}



//UI functions
//drawBoard

//boardClick
  //assign symbol
  //check win
    // if (gameOver)
    //   if(winner === X)
  //drawBoard
GameBoard.prototype.assignSymbol = function (event) {
  let x = parseInt(Number(event) / 10);
  let y = Number(event) % 10;
  if (this.playerTurn % 2 === 1) {//player 1
    this.currentSymbol = "X";
  } else {                        //player 2
    this.currentSymbol = "O";
  }

  if (this.space[x][y] !== 0) {
    return false;
  } else {
    this.space[x][y] = this.currentSymbol;
  }

  checkWin(x, y)
  this.totalSymbols++;
  checkDraw(this.totalSymbols);
  this.playerTurn++;
  return true;
}

function checkDraw(totalSymbols) {
  if (totalSymbols >= 9) {
      handleDraw();//output draw message
    }
  return false; //keep going
}

function checkWin(x, y) {
  if (checkRow(x) || checkColumn(y) || checkEdges()) {
    //gameOver = true
    console.log("Winner" + gameBoard.currentSymbol)
    if(this.currentSymbol === "X") {
      //winner = X
      return handlePlayer1Win; // player 1 won message
    }
    else {
      //winner = O
      return handlePlayer2Win; //player 2 won message
    }
  }
  return false;
}

function resetGame() {
  this.space = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];
  this.playerTurn = 1;
  this.totalSymbols = 0;
}

function checkEdges() {
  if (gameBoard.space[0][0] === gameBoard.space[1][1] && gameBoard.space[1][1] === gameBoard.space[2][2] && gameBoard.space[2][2] === gameBoard.currentSymbol) {
    return true;
  } else if (gameBoard.space[0][2] === gameBoard.space[1][1] && gameBoard.space[1][1] === gameBoard.space[2][0] && gameBoard.space[2][0] === gameBoard.currentSymbol) {
    return true;
  }
  return false;
}

function checkRow(x) {
  for (let i = 0; i < 3; i++) { //checking the row 
    if (gameBoard.space[x][i] !== gameBoard.currentSymbol) {
      return false;
    }
  }
  return true;
}

function checkColumn(y) {
  for (let i = 0; i < 3; i++) { //checking the row 
    if (gameBoard.space[i][y] !== gameBoard.currentSymbol) {
      return false;
    }
  }
  return true;
}

let gameBoard = new GameBoard();





//UI

function handlePlayer1Win() {};
function handlePlayer2Win() {};
function handleDraw() {};























