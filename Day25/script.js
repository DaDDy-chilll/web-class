const container = document.getElementById("container");
const conatinerWidth = Math.floor(container.offsetWidth / 90);
const containerHeight = Math.floor(container.offsetHeight / 90);
let cells=[];
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
let currentPlayer = player1;

(() => {
  initialValue.forEach((row,j) => {
    const rowElement = document.createElement('div')
    rowElement.className='row';
    row.forEach((cell,i) => {
      const cellElement = document.createElement('div')
      cellElement.className='cell';
      cellElement.id=`${j},${i}`;
      rowElement.appendChild(cellElement);
    })
    container.appendChild(rowElement);

  })
  cells = document.getElementsByClassName('cell');
  userClick()
})()


function userClick () {
  cells.forEach(cell => {
    cell.addEventListener('click',console.log('hello'))
  }) 
}


// (() => {

//   for (let i = 0; i < containerHeight - 1; i++) {
//     const row = document.createElement("div");
//     row.className = "row";
//     row.id = `row${i + 1}`;
//     for (let j = 0; j < conatinerWidth - 1; j++) {
//       const cell = `<div class='cell' id="${i + 1},${j + 1}" onclick='${userClick(this)}'></div>`
//       const cell = document.createElement("div");
//       cell.className = "cell";
//       cell.setAttribute('data-cell',`${i + 1},${j + 1}`)
//       cell.onclick = userClick(`${i + 1},${j + 1}`)
//       cell.id='cell'
//       row.append(cell);
//     }
//     container.appendChild(row);
//   }
//   allCells()
  
// })();

// setupGame();


function userClick (id){
  console.log(id);
}

// function allCells () {
// const cells = document.querySelectorAll('#cell');
// cells.forEach(cell => {
//   cell.addEventListener('click',userClick(cell.getAttribute('data-cell')))
// })
// }
