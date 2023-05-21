// Button variables
const grid = document.querySelector('.container');
const rangeGrid = document.querySelector('.btn-range');
let gridSize = 16;
const colorBtn = document.querySelector('.btn-color');
const resetBtn = document.querySelector('.btn-reset');

const drawActivation = document.querySelector('.box-drawActivation');
drawActivation.innerText = "Draw";
drawActivation.style.color = '#38b000';

const eraserBtn = document.querySelector('.btn-eraser');
const rainbowmodeBtn = document.querySelector('.btn-moderainbow');
const normalmodeBtn = document.querySelector('.btn-modenormal');

// Function for the rainbow button, generates random colors
function getRandomColor() {
  let letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

// Draw activation
let click = true;
grid.addEventListener("click", () => {
  click = !click;
  if (click) {
    drawActivation.innerText = "Draw";
    drawActivation.style.color = '#38b000';
  } else {
    drawActivation.innerText = "Draw";
    drawActivation.style.color = 'red';
  }
}); 

// Clears the grid
function clearGrid() {
  grid.innerHTML = '';
}

// Generates the grid based on the range input value
function gridGeneration() {
  gridSize = rangeGrid.value;
  clearGrid();
  grid.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
  grid.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`;

  // Generates individual squares in the grid
  for (let i = 0; i < gridSize * gridSize; i++) {
    const div = document.createElement('div');
    div.classList.add('square');
    let textRange = document.querySelector('.text-range');
    textRange.innerText = gridSize + "X" + gridSize;

    // Event to draw with the chosen color
    div.addEventListener('mouseover', function(event) {
      if (click) {
        event.target.style.backgroundColor = `${colorBtn.value}`;
      }
    });

    // Button for normal mode (single color)
    normalmodeBtn.addEventListener('click', () => { 
      div.addEventListener('mouseover', function(event) {
        if (click) {
          event.target.style.backgroundColor = `${colorBtn.value}`;
        }          
      });
    });

    // Button for rainbow mode (random colors)
    rainbowmodeBtn.addEventListener('click', () => { 
      div.addEventListener('mouseover', function(event) {
        if (click) {
          event.target.style.backgroundColor = getRandomColor();
        }          
      });
    });

    // Button for eraser mode (sets color to beige)
    eraserBtn.addEventListener('click', () => {
      div.addEventListener('mouseover', function(event) {
        if (click) {
          event.target.style.backgroundColor = "beige";
        }
      });
    });

    grid.appendChild(div); 
  } 
}

// Initial grid generation
gridGeneration();

// Generates a new grid when the range input value changes
rangeGrid.addEventListener('input', gridGeneration);

// Resets the grid when the reset button is clicked
resetBtn.addEventListener('click', () => {
  clearGrid();
  gridGeneration();
});
