'use strict';

let gMemes

createMemes()

function createMeme(imgId, ...keywords) {
    return {
        imgId,
        selectedLineIdx: 0,
        keywords: [keywords],

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
        memes.push(createMeme(i, 'funny', 'meme'))
    }
    gMemes = memes
}

function getMemes() {
    return gMemes
}

function updateLineIdx(id) {
    let currMeme = getCurrMeme(id)
    currMeme.selectedLineIdx++
}

function deleteLine(id, lineIdx) {
    let currMeme = getCurrMeme(id)
    let memeLine = currMeme.lines
    console.log(memeLine);
    let deleted = memeLine.splice(lineIdx, 1)
    console.log(deleted);
    console.log(memeLine);
}

function getCurrMeme(id) {
    return gMemes.find(meme => meme.imgId === id)
}

function getCurrLine(id) {
    let currMeme = getCurrMeme(id)
    return currMeme.selectedLineIdx
}

function getCurrAlignment(id) {
    let currMeme = getCurrMeme(id)
    return currMeme.lines[getCurrLine(id)].align
}

function setCurrAlign(id, alignment) {
    let currMeme = getCurrMeme(id)
    currMeme.lines[getCurrLine(id)].align = alignment
}