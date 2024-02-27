// start with a 16x16 functionality
const BOARDSIDEPX = 960;
const boardDiv = document.querySelector('div#board');
const boardSizeLabel = document.querySelector('.board-size');

let removeAllChildNodes = function(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

let getRandomRGB = function() {
    return Math.floor(Math.random() * 255)
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
        target.style.backgroundColor = `rgba(255, 255, 255)`
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
// actually, change RDB on click

let addMoreBlack = function(currentR, currentG, currentB) {
    newR = (255 - currentR)/10
    newG = (255 - currentG)/10
    newB = (255 - currentB)/10
    return newR, newG, newB
}

boardDiv.addEventListener('mouseover', (event) => {
    event.stopPropagation();
    let target = event.target;
    // console.log(target.style.backgroundColor);
    let rgbaArray = (target.style.backgroundColor.split(','))
    console.log(typeof rgbaArray[0])
    rgbaArray[0] = Number(rgbaArray[0].replace('rgb(', ''));
    rgbaArray[3] = Number(rgbaArray[1].replace(' ', ''));
    rgbaArray[2] = Number(rgbaArray[2].replace(')', ''));
    if (rgbaArray[0] == 255 && rgbaArray[1] == 255 && rgbaArray[2] == 255) {
        target.style.backgroundColor = `rgba(${getRandomRGB()}, ${getRandomRGB()}, ${getRandomRGB()})`;
        console.log('changed color')
    } else if (rgbaArray[0] == 0 && rgbaArray[1] == 0 && rgbaArray[2] == 0) {
        console.log('color is already black')
    } else {
        targetArray = (target.style.backgroundColor.split(','))
        targetArray[0] = Number(targetArray[0].replace('rgb(', ''));
        targetArray[3] = Number(targetArray[1].replace(' ', ''));
        targetArray[2] = Number(targetArray[2].replace(')', ''));
        target.style.backgroundColor = `rgba(${targetArray[0] - 30}, ${targetArray[1] - 30}, ${targetArray[2] - 30})`;
        console.log(target.style.backgroundColor);
    }
    console.log(target.getAttribute('name'))
})