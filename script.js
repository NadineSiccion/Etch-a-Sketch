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
let target;
for (let i = 1; i < boardSize+1; i += 1) {
    target = document.createElement('div');
    target.classList.add('pixel');
    
    target.style.width = pixelSide + 'px';
    target.style.height = pixelSide + 'px';
    target.style.backgroundColor = 'rgba(255,255,255, 0.0)'
    target.textContent = i
    boardDiv.appendChild(target);
}

// add opacity on click
boardDiv.addEventListener('click', (event) => {
    event.stopPropagation();
    let target = event.target;
    // console.log(target.style.backgroundColor);
    let rgbaArray = (target.style.backgroundColor.split(','))
    if (rgbaArray[3] == null) {
        console.log('bgcolor set to max opacity')
    } else if (Number(rgbaArray[3].replace(")", "")) == 0) {
        target.style.backgroundColor = `rgba(0, 0, 0, ${0.1})`
        console.log('bgcolor set')
    } else {
        target.style.backgroundColor = `rgba(0, 0, 0, ${Number(rgbaArray[3].replace(")", ""))+0.1})`
        console.log('bgcolor opacity decreased')
    }
    console.log(target.style.backgroundColor)
})

