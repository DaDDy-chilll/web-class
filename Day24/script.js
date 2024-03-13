const container = document.getElementById("container");
const playerOne = document.getElementById("playerOne");
const playerTwo = document.getElementById("playerTwo");
let initialValue = [
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0],
];
const player1 = 1;
const player2 = 2;
let Finished = false;
let winOrLoseOrDraw = 0;
let currentPlayer = player1;

let indexMatch = [];

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
    if(checkWin()) {console.log('p1 win')};
    currentPlayer = player2;
  } else {
    initialValue[rowId][cellId] = player2;
    element.classList.add("active_p2");
    if(checkWin()) {console.log('p2 win')};
    currentPlayer = player1;
  }
  switchPlayer();
}

function switchPlayer() {
  if (currentPlayer === player1) {
    playerTwo.removeAttribute("active");
    playerOne.setAttribute("active", "p1");
  } else {
    playerOne.removeAttribute("active");
    playerTwo.setAttribute("active", "p2");
  }
}

function checkWin() {
  console.log('check win start');
  console.log(currentPlayer);
  const firstRow = initialValue[0];
  const secondRow = initialValue[1];
  const thirdRow = initialValue[2];
  const fourRow = initialValue[3];
  console.log(firstRow);
  console.log(secondRow);
  console.log(thirdRow);
  console.log(fourRow);
  console.log('_______________________________________');
  for (let i = 0; i < 4; i++) {
    if (
      firstRow[i] === currentPlayer &&
      secondRow[i] === currentPlayer &&
      thirdRow[i] === currentPlayer &&
      fourRow[i] === currentPlayer
    ) {
      console.log('vertical');
      return true;
    }else if(
      firstRow.forEach(f => f !== currentPlayer ? false : true) ||
      secondRow.forEach(f => f !== currentPlayer ? false : true) ||
      thirdRow.forEach(f => f !== currentPlayer ? false : true) ||
      fourRow.forEach(f => f !== currentPlayer ? false : true)
    ){
      console.log('horizontal');
      return true
    }else{
      return false
    }
  }
}

// function checkWinState(i) {

//   if(firstCell === -1){
//     firstCell = i
//     return
//   }else if(secondCell === -1){
//     secondCell = i
//     console.log('second');
//     return
//   }else if(thirdCell === -1){
//     thirdCell = i
//     console.log('third');
//     return

//   }else if(fourCell === -1) {
//     fourCell = i
//     return

//   }else{
//     firstCell, secondCell,thirdCell,fourCell = -1;
//   }
//   console.log(initialValue);

//   console.log(firstCell,secondCell,thirdCell,fourCell);
// }
