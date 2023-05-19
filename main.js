const grid = document.querySelector('.container');
const rangeGrid = document.querySelector('.btn-range');
const colorBtn = document.querySelector('.btn-color');
const resetBtn = document.querySelector('.btn-reset');
const drawActivation = document.querySelector('.box-drawActivation');
    drawActivation.innerText = "Draw";
    drawActivation.style.color = '#38b000'
const eraserBtn = document.querySelector('.btn-eraser');
    eraserBtn.addEventListener('click', function() {
    colorBtn.value = '#f5f5dc'
    });

let click = true;

grid.addEventListener("click", () => {
    click = !click;
    if (click) {
        drawActivation.innerText = "Draw"
        drawActivation.style.color = '#38b000'
    }
    else {
        drawActivation.innerText = "Draw"
        drawActivation.style.color = 'red'
    }
}); 


function firstGrid() {
    for (let i = 0; i < 2704; i++) {
        grid.style.gridTemplateColumns = `repeat(16, 1fr)`
        grid.style.gridTemplateRows = `repeat(16, 1fr)`
        const div = document.createElement('div');
        div.classList.add('square');
        let textRange = document.querySelector('.text-range');
        textRange.innerText = '16' + "X" + '16';

        div.addEventListener('mouseover', function(event){
            if (click) {
                event.target.style.backgroundColor = `${colorBtn.value}`;
            }
            
        })
        grid.appendChild(div); 
    }
}
firstGrid();


function clearGrid() {
    grid.innerHTML = ''
  }


resetBtn.addEventListener('click', () => {

    clearGrid()
    grid.style.gridTemplateColumns = `repeat(${rangeGrid.value}, 1fr)`
    grid.style.gridTemplateRows = `repeat(${rangeGrid.value}, 1fr)`

    for (let i = 0; i < rangeGrid.value*rangeGrid.value; i++) {
     
        grid.style.gridTemplateColumns = `repeat(${rangeGrid.value}, 1fr)`
        grid.style.gridTemplateRows = `repeat(${rangeGrid.value}, 1fr)`
        const div = document.createElement('div');
        div.classList.add('square');
        let textRange = document.querySelector('.text-range');
        textRange.innerText = rangeGrid.value + "X" + rangeGrid.value
        div.style.backgroundColor = "beige";
        div.addEventListener('mouseover', function(event){
            if (click) {
                event.target.style.backgroundColor = `${colorBtn.value}`;
            }
        })
        grid.appendChild(div); 
    }
})


rangeGrid.addEventListener('input', function createGrid() {

    clearGrid()
    grid.style.gridTemplateColumns = `repeat(${rangeGrid.value}, 1fr)`
    grid.style.gridTemplateRows = `repeat(${rangeGrid.value}, 1fr)`

    for (let i = 0; i < rangeGrid.value*rangeGrid.value; i++) {
     
        grid.style.gridTemplateColumns = `repeat(${rangeGrid.value}, 1fr)`
        grid.style.gridTemplateRows = `repeat(${rangeGrid.value}, 1fr)`
        const div = document.createElement('div');
        div.classList.add('square');
        let textRange = document.querySelector('.text-range');
        textRange.innerText = rangeGrid.value + "X" + rangeGrid.value
        div.addEventListener('mouseover', function(event){
            if (click) {
                event.target.style.backgroundColor = `${colorBtn.value}`;
            }
        })
        grid.appendChild(div); 
    }
    })