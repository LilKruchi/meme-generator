'use strict';

let gMemes

createMemes()

function createMeme(imgId, ...keywords) {
    return {
        imgId,
        selectedLineIdx: 0,
        keywords: keywords,

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

    memes[0].keywords = ['trump', 'funny', 'meme']
    memes[1].keywords = ['dog', 'funny', 'meme']
    memes[2].keywords = ['baby', 'dog', 'funny', 'meme']
    memes[3].keywords = ['cat', 'funny', 'meme']
    memes[4].keywords = ['baby', 'funny', 'meme']
    memes[5].keywords = ['history', 'funny', 'meme']
    memes[6].keywords = ['baby', 'funny', 'meme']
    memes[7].keywords = ['willy wonka', 'funny', 'meme']
    memes[8].keywords = ['baby', 'funny', 'meme']
    memes[9].keywords = ['barack obama', 'funny', 'meme']
    memes[10].keywords = ['kiss', 'funny', 'meme']
    memes[11].keywords = ['guy', 'funny', 'meme']
    memes[12].keywords = ['leonardo dicaprio', 'funny', 'meme']
    memes[13].keywords = ['matrix', 'morpheus', 'what if', 'funny', 'meme']
    memes[14].keywords = ['lord of the ring', 'funny', 'meme']
    memes[15].keywords = ['star trek', 'funny', 'meme']
    memes[16].keywords = ['putin', 'two', 'funny', 'meme']
    memes[17].keywords = ['toy story', 'buzz lightyear', 'funny', 'meme']
    gMemes = memes
}

function getMemes() {
    return gMemes
}

function updateLineIdx(id) {
    let currMeme = getCurrMeme(id)
    currMeme.selectedLineIdx++
}

function deleteLines(id) {
    let currMeme = getCurrMeme(id)

    currMeme.lines = [{
        txt: '',
        size: 60,
        align: 'center',
        color: '#ffffff'
    }]
    currMeme.selectedLineIdx = 0
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

function filterMemes(filterValue) {
    let filteredArr = []
    let filterMemes = gMemes.filter((meme, idx) => {
        let filtered = meme.keywords.map(keyword => keyword.includes(filterValue))
        filteredArr.push(filtered.some(elem => elem))

        if (filteredArr[idx]) {
            return meme
        }
    })
    gMemes = filterMemes
    // return filterMemes
}