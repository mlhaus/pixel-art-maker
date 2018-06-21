// Select color input
const colorPicker = document.getElementById('colorPicker');

// Select size input
const inputHeight = document.getElementById('inputHeight');
const inputWidth = document.getElementById('inputWidth');
const submitBtn = document.querySelector('input[type="submit"]');

// When size is submitted by the user, call makeGrid()
submitBtn.addEventListener('click', function(event){
  	event.preventDefault();
	let height = inputHeight.value;
	let width = inputWidth.value;
  	makeGrid(height, width);
});

const pixelCanvas = document.getElementById('pixelCanvas');
function respondToTableClick(event){
  if(event.target.nodeName === 'TD'){
 	event.target.style.backgroundColor = colorPicker.value; 
  }
}
pixelCanvas.addEventListener('click', respondToTableClick);

function clearGrid(){
  pixelCanvas.innerHTML = '';
}

function makeGrid(h, w) {
  clearGrid();
  for(let rows = 0; rows < h; rows++){
    let tr = document.createElement('tr');
    pixelCanvas.appendChild(tr);
    for(let cols = 0; cols < w; cols++){
      tr.appendChild(document.createElement('td'));
    }
  }
}
makeGrid(10,10); 