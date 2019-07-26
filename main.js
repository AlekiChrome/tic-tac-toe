


function playTTT() {

    for(let i = 1; i <= 9; i++) {
       clearBox (i);  
    }

document.turn = "X";
document.winner = null;
identifier(document.turn + " Is Next")
}

function identifier(moves) {
document.getElementById("playerInfo").innerText = moves;
}


function playerTurn(gameBoard) {
    if (document.winner != null) {
       identifier(document.turn + " Is Our Winner") 
    } else if(gameBoard.innerText == '') {
        gameBoard.innerText = document.turn;
   nextPlayer();
    } else {
        identifier("Play already made")
    }
 }

function nextPlayer() {
    if(checkForWinner(document.turn)) {
        identifier("Player " + document.turn + " Wins!!!!")
        document.winner = document.turn; 
    } else if(document.turn == "X") {
        document.turn = "O";
        identifier("Player " + document.turn + " is next") 
    } else {
        document.turn = "X";
        identifier("Player " + document.turn + " is next")
    }    
     
}

function checkForWinner(move) {
let result = false;
if(scanGame(1, 2, 3, move) ||
   scanGame(4, 5, 6, move) ||
   scanGame(7, 8, 9, move) ||
   scanGame(1, 4, 7, move) ||
   scanGame(2, 5, 8, move) ||
   scanGame(3, 6, 9, move) ||
   scanGame(1, 5, 9, move) ||
   scanGame(3, 5, 7, move))  {  
       result = true
  }
      return result;

}

function scanGame(a, b, c, move) {
  let result = false;
  if (viewSpace(a) == move && viewSpace(b) == move && viewSpace(c) == move) {
    result = true;  
  }
  return result;
}

function viewSpace (number) {
  return document.getElementById("b" + number).innerText;
}

function clearBox(number) {
    document.getElementById("b" + number). innerText = "";
}
