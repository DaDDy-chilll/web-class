var clickSong = document.getElementById("clickSong");
var gameoverSong = document.getElementById("gameoverSong");
var gamewinSong = document.getElementById("gamewinSong");
var gameStatus = document.getElementById("gameStatus");
var statusTitle = document.getElementById("statusTitle");
var startGame = document.getElementById("gameStart");
var boom, p1, p2, p3, p4, p5, p6, p7, p8;
var isOver = false;
var isWin = false;
var boomImage;
var clicked = 0;

//Game Start Button
function start() {
  startGame.setAttribute("class", "gamestart gamestatus_hidden");
  gameStart();
}

//Game Start
function gameStart() {
  minePosition();
  var boomCell = document.getElementById(`${boom}`);
  boomImage = document.getElementById("boomImg");
  if (boomImage) boomImage.setAttribute("class", "boom hidden");
  else {
    boomImage = document.createElement("img");
    boomImage.setAttribute("src", "assets/img/boom.svg");
    boomImage.setAttribute("class", "boom hidden");
    boomImage.setAttribute("id", "boomImg");
  }
  boomCell.append(boomImage);
}

//Create Mine Position
function minePosition() {
  var row = Math.floor(Math.random() * 6 + 1);
  var col = Math.floor(Math.random() * 6 + 1);
  p1 = row - 1 + "" + (col - 1);
  p2 = row - 1 + "" + col;
  p3 = row - 1 + "" + (col + 1);
  p4 = row + "" + (col - 1);
  p5 = row + "" + (col + 1);
  p6 = row + 1 + "" + (col - 1);
  p7 = row + 1 + "" + col;
  p8 = row + 1 + "" + (col + 1);
  boom = row + "" + col;
}

//Check Safe cells or Mine Cell
function usrPress(cell) {
  if (isOver || isWin) return;
  var id = cell.id;
  if (id == boom) gameOver();
  else if (cell.getAttribute("click") == 0) {
    if (
      id == p1 ||
      id == p2 ||
      id == p3 ||
      id == p4 ||
      id == p5 ||
      id == p6 ||
      id == p7 ||
      id == p8
    ) {
      cell.style.background = "#f4ff2b";
    } else {
      cell.style.background = "linear-gradient(#32FB2E,#08B204)";
      cell.style.background = "#2bff41";
    }
    clickSong.play();
    clicked++;
    cell.setAttribute("click", 1);
    gameWin();
  } else return;
}

//Game Over
function gameOver() {
  isOver = true;
  boomImage = document.getElementById("boomImg");
  boomImage.setAttribute("class", "boom show");
  for (let i = 0; i < 36; i++)
    document.getElementsByClassName("cell")[i].style.background = "#ff1c1c";
  gameoverSong.play();
  gameStatus.setAttribute("class", "gamestatus gamestatus_show");
  statusTitle.innerText = "game over";
}

//Game Win
function gameWin() {
  if (clicked == 35) {
    isWin = true;
    gamewinSong.play();
    gameStatus.setAttribute("class", "gamestatus gamestatus_show");
    statusTitle.innerText = "game win";
  } else return;
}

//Game Retry
function gameRetry() {
  isOver = false;
  isWin = false;
  clicked = 0;
  for (let i = 0; i < 36; i++) {
    var cell = document.getElementsByClassName("cell")[i];
    cell.style.background = "white";
    cell.setAttribute("click", 0);
  }
  gameStatus.setAttribute("class", "gamestatus gamestatus_hidden");
  gameStart();
}
