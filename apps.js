const grid = document.querySelector('#grid');
const btnClear = document.querySelector('.clear');
const btnEraser = document.querySelector('.eraser');
const btnShading = document.querySelector('.shading');
const btnRainbow = document.querySelector('.rainbow');
const btnWarm = document.querySelector('.warm');
let square;
let pen = 'black';
let startDimension = 16;
let allSquares;

btnShading.addEventListener('click', () => pen = 'shading');
btnEraser.addEventListener('click', () => pen = 'eraser');
btnRainbow.addEventListener('click', () => pen = 'rainbow');
btnWarm.addEventListener('click', () => pen = 'warm');

function createGrid(dimension) {
    for(i=0; i<(dimension*dimension) ; i++) {
      square = document.createElement('div');
      square.classList.add('square');
      grid.append(square);
      grid.style.gridTemplateColumns = `repeat(${dimension}, auto)`;
      grid.style.gridTemplateRows = `repeat(${dimension}, auto)`;
      }
    allSquares = document.querySelectorAll('.square');
    allSquares.forEach(item => item.addEventListener('mouseover', etchASketch));
};


 function etchASketch() { 
    console.log(pen)
      if (pen == "black") {
      this.style.background = 'black';
      this.style.opacity = "1";
    } else if (pen == "shading") {
      if (this.style.backgroundColor.match(/rgba/)) {
        let currentOpacity = Number(this.style.backgroundColor.slice(-4, -1));
        if (currentOpacity <= 0.9) {
            this.style.backgroundColor = `rgba(0, 0, 0, ${currentOpacity + 0.1})`;
        }
      } else if ( this.style.backgroundColor == 'rgb(0, 0, 0)') {
          return;
      } else {
          this.style.backgroundColor = 'rgba(0, 0, 0, 0.1)';  
      }
    } else if (pen == "eraser") {
      this.style.background = 'white';
    } else if (pen == "rainbow") {
      const randomColor = Math.floor(Math.random()*16777215).toString(16);
      this.style.backgroundColor = "#" + randomColor;
    } else if (pen == "warm") {
      const huePink = [Math.floor(Math.random() * (360-330)+330)];
      const hueWarm = [Math.floor(Math.random() * 50)];
      huePink.push(...hueWarm);
      const hue = huePink[Math.floor(Math.random() * huePink.length)];
      const sat = Math.floor(Math.random() * (100-60)+60);
      const light = Math.floor(Math.random() * (80-50)+50);
      this.style.backgroundColor = "hsl("+hue +","+ sat+"%," +light+"%)";}
  };

function warmColours() {
  
}


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

slider.addEventListener('mouseup', function() {
  allSquares = document.querySelectorAll('.square');
  allSquares.forEach(item => item.remove());
  createGrid(slider.value);
});

window.onload = () => {
  createGrid(startDimension);
};


