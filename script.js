// start with a 16x16 functionality
const BOARDSIDEPX = 960;
const boardDiv = document.querySelector('div#board');
const boardSizeLabel = document.querySelector('.board-size');

let removeAllChildNodes = function(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

let target;
// establish board size
let setupBoard = function(boardW) {
    // window.prompt('Please enter desired size: ', '16');
    let boardSize = boardW*boardW;
    let pixelSide = ((BOARDSIDEPX)/boardW);
    console.log('pixelSide is ' + pixelSide)
    boardSizeLabel.textContent = `Current size of board: ${boardW}x${boardW}`

    // generate pixels for board
    for (let i = 1; i < boardSize + 1; i += 1) {
        target = document.createElement('div');
        target.classList.add('pixel');
        
        target.style.width = pixelSide + 'px';
        target.style.height = pixelSide + 'px';
        target.setAttribute('name', i.toString())
        target.style.backgroundColor = 'rgba(255,255,255, 0.0)'
        // target.textContent = i
        boardDiv.appendChild(target);
}}

setupBoard(16)

const resetButton = document.querySelector('.reset');
resetButton.addEventListener('click', (e) => {
    userSize = window.prompt('What size should a side be? ', '16');

    if ((typeof Number(userSize) == 'number') && (userSize > 0 && userSize < 101)) {
        console.log((Number(userSize) instanceof Number))
        console.log((userSize > 0 && userSize < 101))
        removeAllChildNodes(boardDiv);
        setupBoard(userSize);
    } else if (!userSize) {
        console.log('got nothing')
        console.log(userSize)
        window.alert('Empty input. Try again.')
    } else {
        console.log('userSize is: '+ userSize)
        window.alert('Size must a number between 1 and 100. Try again.')
    }
});

// change opacity on click
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
    console.log(target.getAttribute('name'))
})