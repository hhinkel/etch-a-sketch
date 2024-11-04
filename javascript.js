let gridSize = 16;  // cells per side
let containerSize = 960; //pixels
const container = document.getElementById('container');
container.style.width = containerSize + 'px';
container.style.height = containerSize + 'px';
const rows = document.getElementsByClassName("grid-row");

function makeRows() {
    for (let i = 0; i < gridSize; i++) {
        const row = document.createElement('div');
        container.appendChild(row).className =  'grid-row';
    }
}

function makeCells() {
    for (let i = 0; i < gridSize; i++) {
        for(let j = 0; j < gridSize; j++) {
            const div = document.createElement('div');
            let cellDimension = (containerSize / gridSize) - 15; //pixels
            div.style.width = cellDimension + 'px';
            div.style.height = cellDimension + 'px';
            rows[j].appendChild(div).id = 'cell';
        }
    }
}

function popup() {
    let value = prompt("Please enter grid size: ", gridSize);
    if (value < 100) {
        const cells = document.querySelectorAll('#cell');
        cells.forEach((cell) => cell.remove());
        const rows = document.querySelectorAll('#rows');
        rows.forEach((row) => row.remove());
        if (value != null) gridSize = value;
        makeGrid();
    } 
}


function makeGrid() {
    makeRows();
    makeCells();

    const cells = document.querySelectorAll("#cell");
    cells.forEach((cell) =>
        cell.addEventListener('mouseover', function() {
            cell.style.background = "black";
        })
    );
}

makeGrid();