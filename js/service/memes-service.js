'use strict';

let gMemes

createMemes()

function createMeme(imgId) {
    return {
        imgId,
        selectedLineIdx: 0,

        lines: [
            {
                txt: '',
                size: 60,
                align: 'center',
                color: '#ffffff'
            }
        ]
    }
}

function createNewLine() {
    return {
        txt: '',
        size: 60,
        align: 'center',
        color: '#ffffff'
    }
}

function createMemes() {
    let memes = []
    // memes.push(createMeme(1))
    // memes.push(createMeme(2))


    for (let i = 1; i < 19; i++) {
        memes.push(createMeme(i))
    }
    gMemes = memes
}

function getMemes() {
    return gMemes
}

function updateLineIdx(id) {
    let currMeme = gMemes.find(meme => meme.imgId === id)
    currMeme.selectedLineIdx++
}

function deleteLine(id, lineIdx) {
    let currMeme = gMemes.find(meme => meme.imgId === id)
    let memeLine = currMeme.lines
    console.log(memeLine);
    let deleted = memeLine.splice(lineIdx, 1)
    console.log(deleted);
    console.log(memeLine);
}