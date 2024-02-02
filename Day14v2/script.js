var boom, p1, p2, p3, p4, p5, p6, p7, p8;
var isOver = false;
var isWin = false;
var clicked = 0;


gameStart();
function usrPress(cell) {
    if(isOver) return;
  var id = cell.id;
  if (id == boom) {
    var boomImg = document.getElementById("boomImg");
    cell.style.background = "linear-gradient(#FF1414,#A60505)";
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
      cell.style.background = "linear-gradient(#FFF509,#D8CF09)";
    } else {
      cell.style.background = "linear-gradient(#32FB2E,#08B204)";
    }
    clicked++;
    cell.setAttribute('click',1);
  }else return;
}

function gameStart() {
  var row = Math.floor(Math.random() * 6 + 1);
  var col = Math.floor(Math.random() * 6 + 1);
  boom = row + "" + col;
  var boomCell = document.getElementById(`${boom}`);
  var image = document.createElement("img");
  image.setAttribute("src", "assets/boom.svg");
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
    for (let i = 0; i < 36; i++) document.getElementsByClassName('cell')[i].style.background="linear-gradient(#FF1414,#A60505)";
    isOver=true
    
}

function gameWin() {
    if(clicked)
}
