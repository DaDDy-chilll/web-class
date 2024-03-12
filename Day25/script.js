const container = document.getElementById("container");
const playerOne = document.getElementById("playerOne");
const playerTwo = document.getElementById("playerTwo");
let initialValue = [
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
];
const player1 = 1;
const player2 = 2;
let Finished = false;
let winOrLoseOrDraw = 0;
let currentPlayer = player1;
let firstCell, secondCell,thirdCell,fourCell = null;

(() => {
  initialValue.forEach((row, j) => {
    const rowElement = document.createElement("div");
    rowElement.className = "row";
    row.forEach((_, i) => {
      const cellElement = `<div class='cell' id="${j},${i}" onclick="userClick(this)"></div>`;
      rowElement.innerHTML += cellElement;
    });
    container.appendChild(rowElement);
  });
  switchPlayer();
})();

function userClick(element) {
  const [rowId, cellId] = element.id.split(",");
  if (initialValue[rowId][cellId] !== 0) return;
  if (currentPlayer === player1) {
    initialValue[rowId][cellId] = player1;
    element.classList.add("active_p1");
    checkWin()
    currentPlayer = player2;
  } else {
    initialValue[rowId][cellId] = player2;
    element.classList.add("active_p2");
    checkWin()
    currentPlayer = player1;
  }
  switchPlayer();
}

function switchPlayer() {
  if (currentPlayer === player1) {
    playerTwo.removeAttribute('active')
    playerOne.setAttribute('active','p1')
  } else {
    playerOne.removeAttribute('active')
    playerTwo.setAttribute('active','p2')
  }
}

function checkWin () {

  initialValue.forEach(row => {
    row.forEach((cell,i) => {
      if(cell === currentPlayer){
        checkWinState(i)
      }
    })
  })
}


function checkWinState(i) {
console.log(firstCell);
  if(firstCell === null){
    firstCell = i
  }else if(secondCell === null){
    secondCell = i
  }else if(thirdCell === null){
    thirdCell = i
  }else if(fourCell === null) {
    fourCell = i
  }else{
    firstCell, secondCell,thirdCell,fourCell = null;
  }
  console.log(initialValue);

  console.log(firstCell,secondCell,thirdCell,fourCell);
}