'use strict';

let gElCanvas
let gCtx
let gCurrImgId


function onChangeToCanvas(imgId) {
    gCurrImgId = imgId
    gElCanvas = document.querySelector('canvas')
    gCtx = gElCanvas.getContext('2d')
    drawImg(imgId)

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
    gCtx.font = `${size}px arial`;
    gCtx.textAlign = 'center'
    gCtx.textBaseline = 'middle'

    gCtx.fillText(text, x, y)
    gCtx.strokeText(text, x, y)
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
        if (idx === 1) {
            drawText(line.txt, midCanvas, bottomCanvas, line.size, line.color)
        }
        if (idx > 1) {
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

    let currMeme = getMemes().find(meme => meme.imgId === gCurrImgId)
    currMeme.lines.push(createNewLine())

}