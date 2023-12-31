import { enableBodyScroll, disableBodyScroll } from '../utils/body-scroll-lock.js'

/** 
    @property {HTMLElement} element
    @property {string[]} images
    @property {string} url
*/

class Lightbox {
    static init () {
        const links = Array.from(document.querySelectorAll('a[href$=".png"], a[href$=".jpg"], a[href$=".jpeg"]'))
        const gallery = links.map(link => {
            const media = {}
            media.url = link.getAttribute('href')
            media.title = link.querySelector('h3').textContent
            return media;
        })
        links.forEach(link => link.addEventListener('click', e => {
            e.preventDefault()
            new Lightbox(e.currentTarget.getAttribute('href'), gallery)
        }))
    }

    /** 
        @param {string} url
        @param {string[]} images
    */
    constructor (url, images) {
        this.media = images.find(elt => elt.url === url)
        this.element = this.buildDOM(url)
        this.images = images
        this.loadImage(this.media)
        this.onKeyUp = this.onKeyUp.bind(this)
        document.body.appendChild(this.element)
        disableBodyScroll(this.element)
        document.addEventListener('keyup', this.onKeyUp)
    }

    /** 
        @param {string} url
    */
    loadImage (media) {
        this.url = null
        const image = new Image();
        const container = this.element.querySelector('.lightbox__container')
        const loader = document.createElement('div')
        loader.classList.add('lightbox__loader')
        container.innerHTML = ''
        container.appendChild(loader)
        const p = document.createElement('p')
        p.textContent = media.title
        image.onload = () => {
            container.removeChild(loader)
            container.appendChild(image)
            container.appendChild(p)
            this.url = media.url
        }
        image.src = media.url
    }

    /**
        @param {KeyboardEvent} e
    */
    onKeyUp (e) {
        if (e.key === 'Escape') {
            this.close(e)
        } else if (e.key === 'ArrowLeft') {
            this.prev(e)
        } else if (e.key === 'ArrowRight') {
            this.next(e)
        }
    }

    /**
        @param {MouseEvent|KeyboardEvent} e
    */
    close (e) {
        e.preventDefault()
        this.element.classList.add('fadeOut')
        enableBodyScroll(this.element)
        window.setTimeout(() => {
            this.element.parentElement.removeChild(this.element)
        }, 500)
        document.removeEventListener('keyup', this.onKeyUp)
    }

    /**
        @param {MouseEvent|KeyboardEvent} e
    */
    next (e) {
            e.preventDefault()
            let i = this.images.findIndex(image => image.url === this.url)
            if (i === this.images.length - 1) {
                i = -1
            }
            this.loadImage(this.images[i + 1])
    }

    /**
        @param {MouseEvent|KeyboardEvent} e
    */
    prev (e) {
        e.preventDefault()
        let i = this.images.findIndex(image => image.url === this.url)
        if (i === 0) {
            i = this.images.length
        }
        this.loadImage(this.images[i - 1])
    }

    /**
        @param {string} url
        @return {HTMLElement}
    */
    buildDOM (url) {
        const dom = document.createElement('div')
        dom.classList.add('lightbox')
        dom.innerHTML = `<div class="lightbox">
                            <button class="lightbox__close"></button>
                            <button class="lightbox__prev"></button>
                            <button class="lightbox__next"></button>
                            <div class="lightbox__container"></div>
                        </div>`
        dom.querySelector('.lightbox__close').addEventListener('click', this.close.bind(this))
        dom.querySelector('.lightbox__next').addEventListener('click', this.next.bind(this))
        dom.querySelector('.lightbox__prev').addEventListener('click', this.prev.bind(this))
        return dom;
    }
}

export default Lightbox;