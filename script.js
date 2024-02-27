// start with a 16x16 functionality
const boardDiv = document.querySelector('div#board');
const BOARDSIDE = 960;

// Establish board size
let boardW = 20;
let boardH = 20;
let boardSize = boardW*boardH;
let pixelSide = Math.floor(((BOARDSIDE)/boardW)-2);
console.log('pixelSide is ' + pixelSide)

// generate pixel for board
let pixelArray = [];
let target;
for (let i = 1; i < boardSize+1; i += 1) {
    target = document.createElement('div');
    target.classList.add('pixel');
    
    console.log('target is an instance of HTMLDivElement');
    target.style.width = pixelSide + 'px';
    target.style.height = pixelSide + 'px';
    target.textContent = i
    boardDiv.appendChild(target);
}


