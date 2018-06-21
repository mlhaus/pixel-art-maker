// Select color input
let color;
function getColor(event){
  color = colorPicker.value;
  if(event){
 	console.log('Selected color :' + event.target.value);
    color = event.target.value;
  }
}
const colorPicker = document.getElementById('colorPicker');
colorPicker.addEventListener("input", getColor);
getColor();

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
 	  event.target.style.backgroundColor = color; 
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