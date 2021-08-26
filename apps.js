const grid = document.querySelector('#grid');
const btnClear = document.querySelector('.clear');
let square;



for(i=0; i<256; i++) {
  square = document.createElement('div');
  square.classList.add('square');
  grid.append(square);
  square.addEventListener('mouseenter', function(e){ 
    e.target.style.background = 'black'});
}

let allSquares = document.querySelectorAll('.square');

function clear() {
  allSquares.forEach(item => item.style.background = 'white')
};

btnClear.addEventListener('click', clear);

  