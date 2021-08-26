const grid = document.querySelector('#grid');
const btnClear = document.querySelector('.clear');
const btnEraser = document.querySelector('.eraser');
const btnShading = document.querySelector('.shading');
const btnRainbow = document.querySelector('.rainbow');
let square;
let pen = 'black';

btnShading.addEventListener('click', () => pen = 'shading');
btnEraser.addEventListener('click', () => pen = 'eraser');
btnRainbow.addEventListener('click', () => pen = 'rainbow');

for(i=0; i<256; i++) {
  square = document.createElement('div');
  square.classList.add('square');
  grid.append(square);
};

let allSquares = document.querySelectorAll('.square');
  
allSquares.forEach(item => item.addEventListener('mouseover', function() { 
    console.log(pen)
      if (pen == "black") {
      item.style.background = 'black';
      item.style.opacity = "1";
    } else if (pen == "shading") {
      item.style.background = 'black';
      let opacity = Number(item.style.opacity);
      item.style.opacity = opacity >= 1 ? "1" : opacity + 0.1 + "";
    } else if (pen == "eraser") {
      item.style.background = 'white';
    } else if (pen == "rainbow") {
      const randomColor = Math.floor(Math.random()*16777215).toString(16);
      item.style.backgroundColor = "#" + randomColor;
    }
  }));

function clear() {
  allSquares.forEach(item => item.style.background = 'white')
  pen = 'black';
};

btnClear.addEventListener('click', clear);
  
const slider = document.getElementById("myRange");
const output = document.getElementById("dimensions-output");
let defaultDimension = slider.value;
output.innerHTML = defaultDimension + "x" + defaultDimension;

slider.oninput = function() {
  let dimension = this.value;
  output.innerHTML = dimension + "x" + dimension;
}




