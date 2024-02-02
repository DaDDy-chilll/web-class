var clickSong = document.getElementById('clickSong')
var gameoverSong = document.getElementById('gameoverSong')
var gamewinSong = document.getElementById('gamewinSong')
var boom, p1, p2, p3, p4, p5, p6, p7, p8;
var isOver = false;
var isWin = false;
var clicked = 0;


gameStart();
function usrPress(cell) {
    if(isOver || isWin) return;
  var id = cell.id;
  if (id == boom) {
    var boomImg = document.getElementById("boomImg");
    boomImg.setAttribute("class", "boom show");
    gameOver();
  } else if(cell.getAttribute('click') == 0) {
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
    clickSong.play()
    clicked++;
    cell.setAttribute('click',1);
    gameWin()
  }else return;
}

function gameStart() {
  var row = Math.floor(Math.random() * 6 + 1);
  var col = Math.floor(Math.random() * 6 + 1);
  boom = row + "" + col;
  var boomCell = document.getElementById(`${boom}`);
  var image = document.createElement("img");
  image.setAttribute("src", "assets/img/boom.svg");
  image.setAttribute("class", "boom hidden");
  image.setAttribute("id", "boomImg");
  boomCell.append(image);
  p1 = row - 1 + "" + (col - 1);
  p2 = row - 1 + "" + col;
  p3 = row - 1 + "" + (col + 1);
  p4 = row + "" + (col - 1);
  p5 = row + "" + (col + 1);
  p6 = row + 1 + "" + (col - 1);
  p7 = row + 1 + "" + col;
  p8 = row + 1 + "" + (col + 1);
}

function gameOver () {
    for (let i = 0; i < 36; i++) document.getElementsByClassName('cell')[i].style.background="#ff1c1c";
    isOver=true
    gameoverSong.play()
}

function gameWin() {
    if(clicked == 35){
      gamewinSong.play();
      isWin=true;
    }else return;
}
