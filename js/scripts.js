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
//drawBoard
//check win

GameBoard.prototype.changeTurn = function () {
  this.playerTurn++;
}

GameBoard.prototype.addTotalSymbol = function () {
  this.totalSymbols++;
}

GameBoard.prototype.assignSymbol = function (id) {
  let x = parseInt(Number(id) / 10);
  let y = Number(id) % 10;
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
  return true;
};

function resetGame(gameBoard) {
  gameBoard.space = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];
  gameBoard.playerTurn = 1;
  gameBoard.currentSymbol = "X";
  gameBoard.totalSymbols = 0;
}

function checkDraw(totalSymbols) {
  if (totalSymbols >= 9) {
    return true;//output draw message
  }
  return false; //keep going
}

function checkWin(id) {
  let x = parseInt(Number(id) / 10);
  let y = Number(id) % 10;
  if (checkRow(x) || checkColumn(y) || checkEdges()) {
    if (gameBoard.currentSymbol === "X") {
      //winner = X
      return "X"; // player 1 won message
    }
    else {
      //winner = O
      return "O"; //player 2 won message
    }
  }
  return null;
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
function drawBoard(target) {
  target.innerText = gameBoard.currentSymbol;
}

function boardClick(event) {
  console.log(event.target.id);
  if (gameBoard.assignSymbol(event.target.id)) {
    drawBoard(event.target);
    gameBoard.addTotalSymbol();
    gameBoard.changeTurn();
    winningCondition(event);
  }
}
function winningCondition(event) {
  const winner = checkWin(event.target.id);
  
    if (winner !== null) {
      setTimeout(function () {
        if (winner === "X") {
          alert("Player X Wins");
        } else if (winner === "O") {
          alert("Player O Wins");
        } 
      }, 150);
    grid.removeEventListener('click', boardClick);
    } else if (winner === null) {
      setTimeout(function() {
        if (checkDraw(gameBoard.totalSymbols)) {
          alert("Y'all too smart. No winner!");
          grid.removeEventListener('click', boardClick);
        }
      }, 150);
    }
//     grid.removeEventListener('click', boardClick);
}

const grid = document.querySelector("div.grid-container");
grid.addEventListener('click', boardClick);

function resetBoard() {
  resetGame(gameBoard);
  const divEmptyArray = Array.from(document.querySelectorAll("div.empty"));
  
  for (let i = 0; i < divEmptyArray.length; i++) {
    divEmptyArray[i].innerText = null;
  }
  
  grid.addEventListener('click', boardClick);
};

document.getElementById("reset-game").addEventListener("click", resetBoard);


















