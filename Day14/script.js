var mine;
var p1;
var p2;
var p3;
var p4;
var p5;
var p6;
var p7;
var p8;
var isOver = false;
var isWin = false;
var count = 0;

mineBuild();
function mineBuild() {
  var row = Math.floor(Math.random() * 6 + 1);
  var col = Math.floor(Math.random() * 6 + 1);
  mine = row + "" + col;

  p1 = (row - 1) + "" + (col - 1);
  p2 = (row - 1) + "" + col;
  p3 = (row - 1) + "" + (col + 1);
  p4 = row + "" + (col - 1);
  p5 = row + "" + (col + 1);
  p6 = (row + 1) + "" + (col - 1);
  p7 = (row + 1) + "" + col;
  p8 = (row + 1) + "" + (col + 1);
}


function userPress(cell) {
    if(isOver || isWin) return;
    var pressCell = cell.id;
    if(pressCell == mine){
       cell.style.backgroundColor="red";
       cell.innerText="BOOM";
       gameOverDisplay();
    }else if(cell.getAttribute('click') == 0){
        if(  
            pressCell == p1 ||
            pressCell == p2 ||
            pressCell == p3 ||
            pressCell == p4 ||
            pressCell == p5 ||
            pressCell == p6 ||
            pressCell == p7 ||
            pressCell == p8
        ){
            cell.style.backgroundColor="yellow";
        }else{
            cell.style.backgroundColor="green";
    
        }
        cell.setAttribute('click',true)
        count++;
    }
    gameWinDisplay();
  
}

function playClick() {
    //play click sound
}


function gamOverSound() {
    //play game over sound
}

function gameOverDisplay () {
    isOver=true
    for (let i = 0; i < 36; i++) {
       document.getElementsByClassName('cell')[i].style.backgroundColor='red'
        
    }

    document.getElementById('32').innerText='G'
    document.getElementById('33').innerText='A'
    document.getElementById('34').innerText='M'
    document.getElementById('35').innerText='E'
    document.getElementById('42').innerText='O'
    document.getElementById('43').innerText='V'
    document.getElementById('44').innerText='E'
    document.getElementById('45').innerText='R'
}

function gameWinDisplay () {
    if(count == 35){
        isWin = true;
        for (let i = 0; i < 36; i++) {
            document.getElementsByClassName('cell')[i].style.backgroundColor='green'
             
         }
     
         document.getElementById('32').innerText='G'
         document.getElementById('33').innerText='A'
         document.getElementById('34').innerText='M'
         document.getElementById('35').innerText='E'
         document.getElementById('43').innerText='w'
         document.getElementById('44').innerText='I'
         document.getElementById('45').innerText='N'
    }
}