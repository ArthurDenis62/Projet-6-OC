export default class Image {
    createHTML(element) {
        let eltImg = document.createElement('img')
        eltImg.setAttribute('src', element.image)
        eltImg.setAttribute('alt', element.alt)
        eltImg.setAttribute('role', 'button')
        eltImg.className = 'photosMedia'
        return eltImg
    }
}