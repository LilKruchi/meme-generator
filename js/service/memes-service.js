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
                color: 'white'
            }
        ]
    }
}

function createNewLine() {
    return {
        txt: '',
        size: 60,
        align: 'center',
        color: 'white'
    }
}

function createMemes() {
    let memes = []
    // memes.push(createMeme(1))
    // memes.push(createMeme(2))
    // memes.push(createMeme(3))
    // memes.push(createMeme(4))
    // memes.push(createMeme(5))

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