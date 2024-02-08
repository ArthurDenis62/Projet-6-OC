import { enableBodyScroll, disableBodyScroll } from '../utils/body-scroll-lock.js'

/** 
    @property {HTMLElement} element
    @property {string[]} images
    @property {string} url
    @property {Media[]} mediaList
    @property {Media} currentMedia
*/

class Lightbox {
    static init () {
        const links = Array.from(document.querySelectorAll('a[href$=".png"], a[href$=".jpg"], a[href$=".jpeg"], a[href$=".mp4"], a[href$=".webm"]'))
        const mediaList = links.map(link => {
            const media = {}
            media.url = link.getAttribute('href')
            media.title = link.querySelector('h3').textContent
            return media;
        })
        links.forEach(link => link.addEventListener('click', e => {
            e.preventDefault()
            new Lightbox(e.currentTarget.getAttribute('href'), mediaList)
        }))
    }

    /** 
        @param {string} url
        @param {string[]} images
        @param {string} url
        @param {Media[]} mediaList
    */
    constructor (url, mediaList) {
        this.currentMedia = mediaList.find(elt => elt.url === url)
        this.element = this.buildDOM(url)
        this.mediaList = mediaList
        this.loadImage(this.currentMedia)
        this.onKeyUp = this.onKeyUp.bind(this)
        document.body.appendChild(this.element)
        disableBodyScroll(this.element)
        document.addEventListener('keyup', this.onKeyUp)
        this.handleAccessibility()
    }

    handleAccessibility() {
        const modal = document.querySelector('#controles');
        const focusableElements = 'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';
        const focusableContent = modal.querySelectorAll(focusableElements);
        const firstFocusableElement = focusableContent[0];
        const lastFocusableElement = focusableContent[focusableContent.length - 1];

        firstFocusableElement.focus()
        document.addEventListener('keydown', function(e) {
        let isTabPressed = e.key === 'Tab' || e.keyCode === 9;

        if (!isTabPressed) {
            return;
        }

        if (e.shiftKey) {
            if (document.activeElement === firstFocusableElement || document.activeElement === modal) {
            lastFocusableElement.focus();
            e.preventDefault();
            }
        } else {
            if (document.activeElement === lastFocusableElement) {
            firstFocusableElement.focus();
            e.preventDefault();
            }
        }
    });
    }

    /** 
        @param {string} url
    */
    loadImage (media) {
        this.url = null
        const container = this.element.querySelector('.lightbox__content')
        const loader = document.createElement('div')
        loader.classList.add('lightbox__loader')
        container.innerHTML = ''
        container.appendChild(loader)
        const p = document.createElement('p')
        p.textContent = media.title
        
        if (media.url.endsWith('.mp4') || media.url.endsWith('.webm')) {
            const video = document.createElement('video')
            video.controls = true
            video.addEventListener('loadeddata', () => {
                container.removeChild(loader)
                container.appendChild(video)
                container.appendChild(p)
                this.url = media.url
            })
            video.src = media.url
        } else {
            const image = new Image()
            image.onload = () => {
                container.removeChild(loader)
                container.appendChild(image)
                container.appendChild(p)
                this.url = media.url
            }
            image.src = media.url
        }
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
            let i = this.mediaList.findIndex(media  => media .url === this.url)
            if (i === this.mediaList.length - 1) {
                i = -1
            }
            this.loadImage(this.mediaList[i + 1])
    }

    /**
        @param {MouseEvent|KeyboardEvent} e
    */
    prev (e) {
        e.preventDefault()
        let i = this.mediaList.findIndex(media => media.url === this.url)
        if (i === 0) {
            i = this.mediaList.length
        }
        this.loadImage(this.mediaList[i - 1])
    }

    /**
        @param {string} url
        @return {HTMLElement}
    */
    buildDOM (url) {
        const dom = document.createElement('div')
        dom.classList.add('lightbox')
        dom.innerHTML = `<div class="lightbox" id="controles">
                            <button class="lightbox__close" aria-label="Fermer"></button>
                            <button class="lightbox__prev" aria-label="Précédent"></button>
                            <button class="lightbox__next" aria-label="Suivant"></button>
                            <div class="lightbox__container">
                                <div class="lightbox__content"></div>
                            </div>
                        </div>`
        dom.querySelector('.lightbox__close').addEventListener('click', this.close.bind(this))
        dom.querySelector('.lightbox__next').addEventListener('click', this.next.bind(this))
        dom.querySelector('.lightbox__prev').addEventListener('click', this.prev.bind(this))
        return dom;
    }
}

export default Lightbox;