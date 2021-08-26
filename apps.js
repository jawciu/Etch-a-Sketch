const grid = document.querySelector('#grid');
const btnClear = document.querySelector('.clear');
const btnEraser = document.querySelector('.eraser');
let square;



for(i=0; i<256; i++) {
  square = document.createElement('div');
  square.classList.add('square');
  grid.append(square);
}

let allSquares = document.querySelectorAll('.square');

allSquares.forEach(item => item.addEventListener('mouseenter', function(e) { 
  e.target.style.background = 'black'}));

function clear() {
  allSquares.forEach(item => item.style.background = 'white')
  allSquares.forEach(item => item.addEventListener('mouseenter', function(e) { 
    e.target.style.background = 'black'}));
};

function white() {
  allSquares.forEach(item => item.addEventListener('mouseenter', function(e) { 
    e.target.style.background = 'white'}));
}

btnClear.addEventListener('click', clear);
btnEraser.addEventListener('click', white);
  