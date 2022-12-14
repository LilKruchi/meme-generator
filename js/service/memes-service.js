'use strict';

let gMemes

createMemes()

function createMeme(imgId,) {
    return {
        imgId,
        selectedLineIdx: 0,

        lines: [
            {
                txt: 'Top Text',
                size: 60,
                align: 'left',
                color: 'red'
            },
            {
                txt: 'Bottom Text',
                size: 60,
                align: 'left',
                color: 'red'
            },
            {
                txt: 'Test',
                size: 60,
                align: 'left',
                color: 'red'
            },
            {
                txt: 'ABC',
                size: 60,
                align: 'left',
                color: 'red'
            },
        ]
    }
}

function createMemes() {
    let memes = []
    memes.push(createMeme(1))
    memes.push(createMeme(2))
    memes.push(createMeme(3))
    memes.push(createMeme(4))
    memes.push(createMeme(5))
    gMemes = memes
}

function getMemes() {
    return gMemes
}