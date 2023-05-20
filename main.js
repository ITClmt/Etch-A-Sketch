// Button variable
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
const rainbowmodeBtn = document.querySelector('.btn-moderainbow');
const normalmodeBtn = document.querySelector('.btn-modenormal')

let click = true;


// Function for the rainbow button, generate random colors
function getRandomColor() {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

// Draw activation
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

//First Grid generation
function firstGrid() {
    
    for (let i = 0; i < 256; i++) {
        // the first grid is 16 x 16
        grid.style.gridTemplateColumns = `repeat(16, 1fr)`
        grid.style.gridTemplateRows = `repeat(16, 1fr)`
        const div = document.createElement('div');
        div.classList.add('square');
        let textRange = document.querySelector('.text-range');
        textRange.innerText = '16' + "X" + '16';

        //event to draw with a color chosen
        div.addEventListener('mouseover', function(event){
            if (click) {
                event.target.style.backgroundColor = `${colorBtn.value}`;
            }          
        });

        //button for Rainbow mode or one color mode !
        normalmodeBtn.addEventListener('click', () => { 

            div.addEventListener('mouseover', function(event){
                if (click) {
                    event.target.style.backgroundColor = `${colorBtn.value}`;
                }          
            });
        });

        rainbowmodeBtn.addEventListener('click', () => { 
            div.addEventListener('mouseover', function(event){
                if (click) {
                    event.target.style.backgroundColor = getRandomColor();
                }          
            });
        });
        
        grid.appendChild(div); 
    }
}
firstGrid();


function clearGrid() {
    grid.innerHTML = ''
  }

//Reset Grid button
resetBtn.addEventListener('click', () => {
    // Clear the grid
    clearGrid()
    grid.style.gridTemplateColumns = `repeat(${rangeGrid.value}, 1fr)`
    grid.style.gridTemplateRows = `repeat(${rangeGrid.value}, 1fr)`
    // Generation of a new grid
    for (let i = 0; i < rangeGrid.value*rangeGrid.value; i++) {
     
        grid.style.gridTemplateColumns = `repeat(${rangeGrid.value}, 1fr)`
        grid.style.gridTemplateRows = `repeat(${rangeGrid.value}, 1fr)`
        const div = document.createElement('div');
        div.classList.add('square');
        let textRange = document.querySelector('.text-range');
        textRange.innerText = rangeGrid.value + "X" + rangeGrid.value
        div.style.backgroundColor = "beige";

        //event to draw with a color chosen
        div.addEventListener('mouseover', function(event){
            if (click) {
                event.target.style.backgroundColor = `${colorBtn.value}`;
            }          
        });

        //button for Rainbow mode or one color mode !
        normalmodeBtn.addEventListener('click', () => { 
            div.addEventListener('mouseover', function(event){
                if (click) {
                    event.target.style.backgroundColor = `${colorBtn.value}`;
                }          
            });
        });

        rainbowmodeBtn.addEventListener('click', () => { 
            div.addEventListener('mouseover', function(event){
                if (click) {
                    event.target.style.backgroundColor = getRandomColor();
                }          
            });
        });

        grid.appendChild(div); 
    }
})

//Generate new grid with the Range input
rangeGrid.addEventListener('input', function createGrid() {
    // Clear the grid to be able to generate a new one with the new range Input value
    clearGrid()
    grid.style.gridTemplateColumns = `repeat(${rangeGrid.value}, 1fr)`
    grid.style.gridTemplateRows = `repeat(${rangeGrid.value}, 1fr)`
    // Generation of a new grid with the value of the range input
    for (let i = 0; i < rangeGrid.value*rangeGrid.value; i++) {
     
        grid.style.gridTemplateColumns = `repeat(${rangeGrid.value}, 1fr)`
        grid.style.gridTemplateRows = `repeat(${rangeGrid.value}, 1fr)`
        const div = document.createElement('div');
        div.classList.add('square');
        let textRange = document.querySelector('.text-range');
        textRange.innerText = rangeGrid.value + "X" + rangeGrid.value
        //event to draw with a color chosen

        div.addEventListener('mouseover', function(event){
            if (click) {
                event.target.style.backgroundColor = `${colorBtn.value}`;
            }
        });

        //button for Rainbow mode or one color mode !
        normalmodeBtn.addEventListener('click', () => { 

            div.addEventListener('mouseover', function(event){
                if (click) {
                    event.target.style.backgroundColor = `${colorBtn.value}`;
                }          
            });
        });

        rainbowmodeBtn.addEventListener('click', () => { 
            div.addEventListener('mouseover', function(event){
                if (click) {
                    event.target.style.backgroundColor = getRandomColor();
                }          
            });
        });

        grid.appendChild(div); 
    }
    })