'use strict';

let gElCanvas
let gCtx
let gCurrImgId


function onChangeToCanvas(imgId) {
    gCurrImgId = imgId
    gElCanvas = document.querySelector('canvas')
    gCtx = gElCanvas.getContext('2d')

    drawImg(imgId)
    addEvents()

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
    gCtx.textAlign = 'center'
    gCtx.textBaseline = 'middle'

    gCtx.fillText(text.toUpperCase(), x, y)
    gCtx.strokeText(text.toUpperCase(), x, y)
}


function addEvents() {
    computerEvents()
}


function computerEvents() {

}


function draw(ev) {
    ev.preventDefault()

    const { offsetX, offsetY } = ev
    console.log(offsetX, offsetY);
}


function createText() {
    let currMeme = getMemes().find(meme => meme.imgId === gCurrImgId)
    let midCanvas = gElCanvas.width / 2
    let bottomCanvas = gElCanvas.height - currMeme.lines[0].size

    currMeme.lines.forEach((line, idx) => {
        if (idx === 0) {
            drawText(line.txt, midCanvas, line.size, line.size, line.color)
        }
        else if (idx === 1) {
            drawText(line.txt, midCanvas, bottomCanvas, line.size, line.color)
        }
        else if (idx > 1) {
            drawText(line.txt, midCanvas, midCanvas, line.size, line.color)
        }
    })

}


function onTextInput(el) {
    let currMeme = getMemes().find(meme => meme.imgId === gCurrImgId)

    currMeme.lines[currMeme.selectedLineIdx].txt = el.value
    createText()
    drawImg(gCurrImgId)
}


function addText() {
    updateLineIdx(gCurrImgId)
    let elTxtInput = document.querySelector('.meme-txt')
    let currMeme = getMemes().find(meme => meme.imgId === gCurrImgId)
    currMeme.lines.push(createNewLine())
    elTxtInput.value = ''

}

function colorPicker(el) {
    let currMeme = getMemes().find(meme => meme.imgId === gCurrImgId)
    currMeme.lines[currMeme.selectedLineIdx].color = el.value
    createText()
}

function changeFont(fontNum, ev) {
    let currMeme = getMemes().find(meme => meme.imgId === gCurrImgId)
    if (ev.shiftKey) currMeme.lines[currMeme.selectedLineIdx].size += (fontNum * 5)
    currMeme.lines[currMeme.selectedLineIdx].size += fontNum

    createText()
    drawImg(gCurrImgId)
}

function changeLineIdx() {
    let currMeme = getMemes().find(meme => meme.imgId === gCurrImgId)
    let linesLength = currMeme.lines.length
    currMeme.selectedLineIdx += 1
    if (currMeme.selectedLineIdx > linesLength - 1) currMeme.selectedLineIdx = 0

    let memeText = document.querySelector('.meme-txt')
    let memeColor = document.querySelector('#meme-color')

    memeText.value = currMeme.lines[currMeme.selectedLineIdx].txt
    memeColor.value = currMeme.lines[currMeme.selectedLineIdx].color
}