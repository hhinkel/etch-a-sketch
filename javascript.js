let gridSize = 16;
const container = document.getElementById('container');
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
            rows[j].appendChild(div).id = 'cell';
        }
    }
}

function popup() {
    let value = prompt("Please enter grid size: ", gridSize);
    const cells = document.querySelectorAll('#cell');
    cells.forEach((cell) => cell.remove());
    const rows = document.querySelectorAll('#rows');
    rows.forEach((row) => row.remove());
    if (value != null) gridSize = value;
    makeGrid();
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