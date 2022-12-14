'use strict';


function onInit() {
    renderMemes()
}

function renderMemes() {
    let elPhotoContainer = document.querySelector('.photo-container')
    let strHTMLs = getMemes().map(meme => {
        return `
        <img src="./img/${meme.imgId}.jpg" draggable="false" class="image-item img-grid${meme.imgId}" alt="meme" onclick="onClickImg(${meme.imgId})"/>
        `
    })
    elPhotoContainer.innerHTML = strHTMLs.join('')
}

function onClickImg(imgId) {
    let elGallery = document.querySelector('.photo-gallery')
    let elGenerator = document.querySelector('.meme-generator')

    elGallery.style.display = 'none'
    elGenerator.style.display = 'block'

    onChangeToCanvas(imgId)

}

function backToGallery() {
    let elGallery = document.querySelector('.photo-gallery')
    let elGenerator = document.querySelector('.meme-generator')

    elGallery.style.display = 'block'
    elGenerator.style.display = 'none'

}