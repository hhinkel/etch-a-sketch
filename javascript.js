const gridSize = 16;
const container = document.getElementById('container');
const rows = document.getElementsByClassName("grid-row");

function makeRows() {
    for (let i = 0; i < gridSize; i++) {
        let row = document.createElement('div');
        container.appendChild(row).className =  'grid-row';
    }
}

function makeCells() {
    for (let i = 0; i < rows.length; i++) {
        for(let j = 0; j < gridSize; j++) {
            let div = document.createElement('div');
            rows[j].appendChild(div).id = 'cell';
        }
    }
}

makeRows();
makeCells();

const cells = document.querySelectorAll("#cell");
cells.forEach((cell) =>
    cell.addEventListener('mouseover', function() {
        cell.style.background = "black";
    })
);


