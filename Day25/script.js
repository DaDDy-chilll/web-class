const container = document.getElementById('container');



(() => {
    const conatinerWidth = Math.floor(container.offsetWidth / 90);
    const containerHeight = Math.floor(container.offsetHeight / 90);
    console.log(containerHeight,conatinerWidth);
    for (let i = 0; i < containerHeight; i++) {
    const row = document.createElement('div')
    row.className = 'row'

        for (let j = 0; j < conatinerWidth; j++) {
    const cell = document.createElement('div')
    cell.className = 'cell';

            row.appendChild(cell.cloneNode())
        }
        container.appendChild(row.cloneNode())

   }
})()