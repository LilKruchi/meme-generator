'use strict';

let gMemes

createMemes()

function createMeme(imgId,) {
    return {
        imgId,
        selectedLineIdx: 0,

        lines: [
            {
                txt: '',
                size: 60,
                align: 'center',
                color: 'white'
            },
            // {
            //     txt: 'Bottom Text',
            //     size: 60,
            //     align: 'left',
            //     color: 'white'
            // },
            // {
            //     txt: 'Test',
            //     size: 60,
            //     align: 'left',
            //     color: 'red'
            // },
            // {
            //     txt: 'ABC',
            //     size: 60,
            //     align: 'left',
            //     color: 'red'
            // },
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

function updateLineIdx(id) {
    let currMeme = gMemes.find(meme => meme.imgId === id)
    currMeme.selectedLineIdx++
}