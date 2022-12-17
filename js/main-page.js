'use strict';


function onInit() {
    renderMemes()
    backToGallery()
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
    let elHeaderLinks = document.querySelector('.header-links')

    elHeaderLinks.querySelector('.memes').classList.remove('selected')
    elHeaderLinks.querySelector('.about').classList.remove('selected')
    elHeaderLinks.querySelector('.gallery').classList.remove('selected')

    elGallery.style.display = 'none'
    elGenerator.style.display = 'block'

    document.documentElement.style.backgroundColor = '#E5E5E5'
    document.documentElement.scrollTop -= 500
    onChangeToCanvas(imgId)

}

function backToGallery() {
    let elGallery = document.querySelector('.photo-gallery')
    let elGenerator = document.querySelector('.meme-generator')
    let elHeaderLinks = document.querySelector('.header-links')

    elHeaderLinks.querySelector('.gallery').classList.add('selected')
    elGallery.style.display = 'block'
    elGenerator.style.display = 'none'
}

function changeToMemes(el) {
    el.classList.add('selected')
    let elHeaderLinks = document.querySelector('.header-links')
    elHeaderLinks.querySelector('.gallery').classList.remove('selected')
    elHeaderLinks.querySelector('.about').classList.remove('selected')
}

function changeToGallery(el) {
    let elGallery = document.querySelector('.photo-gallery')
    let elGenerator = document.querySelector('.meme-generator')
    let elHeaderLinks = document.querySelector('.header-links')

    elGallery.style.display = 'block'
    elGenerator.style.display = 'none'
    el.classList.add('selected')
    elHeaderLinks.querySelector('.memes').classList.remove('selected')
    elHeaderLinks.querySelector('.about').classList.remove('selected')
}

function changeToAbout(el) {
    el.classList.add('selected')
    let elHeaderLinks = document.querySelector('.header-links')
    elHeaderLinks.querySelector('.memes').classList.remove('selected')
    elHeaderLinks.querySelector('.gallery').classList.remove('selected')
}

function toggleMenu() {
    document.body.classList.toggle('menu-open')
}

function onFilter(el) {
    filterMemes(el.value)
    renderMemes()
    createMemes()
}
