const container = document.getElementById("container");
let initialValue = [
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
]
  /**
   * @description Set up game / Create Row and cell with loop;
   */
  setupGame();
  const setupGame = () => {
    const conatinerWidth = Math.floor(container.offsetWidth / 90);
    const containerHeight = Math.floor(container.offsetHeight / 90);
    for (let i = 0; i < containerHeight - 1; i++) {
      const row = document.createElement("div");
      row.className = "row";
      row.id = `row${i + 1}`;
      for (let j = 0; j < conatinerWidth - 1; j++) {
        const cell = document.createElement("div");
        cell.className = "cell";
        cell.id = `${i + 1},${j + 1}`;
        row.appendChild(cell.cloneNode());
      }
      container.appendChild(row);
    }
  }

