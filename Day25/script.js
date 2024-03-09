const container = document.getElementById("container");
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
/**
 * @description Set up game / Create Row and cell with loop;
 */





(() => {
  const conatinerWidth = Math.floor(container.offsetWidth / 90);
  const containerHeight = Math.floor(container.offsetHeight / 90);
  for (let i = 0; i < containerHeight - 1; i++) {
    const row = document.createElement("div");
    row.className = "row";
    row.id = `row${i + 1}`;
    for (let j = 0; j < conatinerWidth - 1; j++) {
      const cell = document.createElement("div");
      cell.className = "cell";
      cell.setAttribute('data-cell',`${i + 1},${j + 1}`)
      // cell.onclick = userClick(`${i + 1},${j + 1}`)
      cell.id='cell'
      row.appendChild(cell.cloneNode());
    }
    container.appendChild(row);
  }
  allCells()
  
})();

// setupGame();


function userClick (id){
  console.log(id);
}

function allCells () {
const cells = document.querySelectorAll('#cell');
cells.forEach(cell => {
  cell.addEventListener('click',userClick(cell.getAttribute('data-cell')))
})
}
