'use strict';

let gElCanvas
let gCtx
let gCurrImgId
let gCurrMeme
let gIsMouseDown = false


function onChangeToCanvas(imgId) {
    gCurrImgId = imgId
    gElCanvas = document.querySelector('canvas')
    gCtx = gElCanvas.getContext('2d')

    drawImg(imgId)
    addEvents()
    alignText('center')
    window.addEventListener('resize', () => {
        drawImg(imgId)
    })
}

function drawImg(imgId) {
    const elImg = new Image()
    elImg.src = `./img/${imgId}.jpg`

    elImg.onload = () => {
        gCtx.drawImage(elImg, 0, 0, gElCanvas.width, gElCanvas.height)
        createText()
    }

}

function drawText(text, x, y, size = 40, color) {
    gCtx.lineWidth = 2
    gCtx.strokeStyle = 'black'
    gCtx.fillStyle = color
    gCtx.font = `${size}px Impact`;
    gCtx.textAlign = getCurrAlignment(gCurrImgId)
    gCtx.textBaseline = 'middle'

    let currMeme = getCurrMeme(gCurrImgId)
    let currLine = getCurrLine(gCurrImgId)
    currMeme.lines[currLine].coordY = y

    if (currMeme.lines[0].coordY === 540) {
        currMeme.lines[0].coordY = 60
    }

    if (getCurrAlignment(gCurrImgId) === 'end') {
        x = gElCanvas.width
        gCtx.fillText(text.toUpperCase(), gElCanvas.width - 5, y)
        gCtx.strokeText(text.toUpperCase(), gElCanvas.width - 5, y)
    }
    else if (getCurrAlignment(gCurrImgId) === 'left') {
        x = 5
        gCtx.fillText(text.toUpperCase(), x, y)
        gCtx.strokeText(text.toUpperCase(), x, y)
    }
    else {
        gCtx.fillText(text.toUpperCase(), x, y)
        gCtx.strokeText(text.toUpperCase(), x, y)
    }

}

function addEvents() {
    addMouseListeners()
    addTouchListeners()
}


function addMouseListeners() {
    // gElCanvas.addEventListener('mousemove')
    // gElCanvas.addEventListener('mousedown')
    // gElCanvas.addEventListener('mouseup')
}

function addTouchListeners() {
    // gElCanvas.addEventListener('touchmove')
    // gElCanvas.addEventListener('touchstart')
    // gElCanvas.addEventListener('touchend')
}

function mouseXY(ev) {
    ev.preventDefault()

    let canvasX = ev.pageX - gElCanvas.offsetLeft
    let canvasY = ev.pageY - gElCanvas.offsetTop
    const { offsetX, offsetY } = ev
    // console.log(offsetX, offsetY);
    console.log(canvasX, canvasY);

    moveText(canvasY)
}

function moveText(canvasY) {
    let currMeme = getCurrMeme(gCurrImgId)
    let currLine = getCurrLine(gCurrImgId)

    let textYCoord = currMeme.lines[currLine].coordY
    let textSize = currMeme.lines[currLine].size
    // console.log(currMeme.lines[currLine]);


    if (canvasY > textYCoord - textSize && canvasY < textYCoord + textSize) {
        console.log('textArea');
        gIsMouseDown = true
        console.log(gIsMouseDown);
    } else {
        gIsMouseDown = false
    }

}

function createText() {
    let currMeme = getCurrMeme(gCurrImgId)
    let alignCanvas = gElCanvas.width / 2
    let bottomCanvas = gElCanvas.height - currMeme.lines[0].size
    currMeme.lines.forEach((line, idx) => {
        if (idx === 0) {
            drawText(line.txt, alignCanvas, line.size, line.size, line.color)
        }
        else if (idx === 1) {
            drawText(line.txt, alignCanvas, bottomCanvas, line.size, line.color)
        }
        else if (idx > 1) {
            drawText(line.txt, alignCanvas, alignCanvas, line.size, line.color)
        }
    })
}

function onTextInput(el) {
    let currMeme = getCurrMeme(gCurrImgId)

    currMeme.lines[currMeme.selectedLineIdx].txt = el.value
    createText()
    drawImg(gCurrImgId)
}


function addText() {
    updateLineIdx(gCurrImgId)



    let elTxtInput = document.querySelector('.meme-txt')
    let currMeme = getCurrMeme(gCurrImgId)
    currMeme.lines.push(createNewLine())
    elTxtInput.value = ''

    // let currLine = getCurrLine(gCurrImgId)
    // currMeme.lines[currLine].coordX = x
    // currMeme.lines[currLine].coordY = y
    // console.log(currMeme.lines[currLine]);
}

function colorPicker(el) {
    let currMeme = getCurrMeme(gCurrImgId)
    currMeme.lines[currMeme.selectedLineIdx].color = el.value
    createText()
}

function changeFont(fontNum, ev) {
    let currMeme = getCurrMeme(gCurrImgId)

    if (ev.shiftKey) currMeme.lines[currMeme.selectedLineIdx].size += (fontNum * 5)
    currMeme.lines[currMeme.selectedLineIdx].size += fontNum

    createText()
    drawImg(gCurrImgId)
}

function changeLineIdx() {
    let currMeme = getCurrMeme(gCurrImgId)
    let linesLength = currMeme.lines.length
    currMeme.selectedLineIdx += 1
    if (currMeme.selectedLineIdx > linesLength - 1) currMeme.selectedLineIdx = 0

    let memeText = document.querySelector('.meme-txt')
    let memeColor = document.querySelector('#meme-color')

    memeText.value = currMeme.lines[currMeme.selectedLineIdx].txt
    memeColor.value = currMeme.lines[currMeme.selectedLineIdx].color
}

function onDeleteLines() {
    let memeText = document.querySelector('.meme-txt')
    deleteLines(gCurrImgId)
    drawImg(gCurrImgId)
    memeText.value = ''
}

function alignText(alignDir) {
    setCurrAlign(gCurrImgId, alignDir)
    drawImg(gCurrImgId)
}

function downloadCanvas(elLink) {
    // Gets the canvas content and convert it to base64 data URL that can be save as an image
    const data = gElCanvas.toDataURL() // Method returns a data URL containing a representation of the image in the format specified by the type parameter.
    elLink.href = data // Put it on the link
    elLink.download = 'meme' // Can change the name of the file
}

function onHoverText() {

}