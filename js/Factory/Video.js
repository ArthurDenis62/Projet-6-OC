export default class Video {
    createHTML(element) {
        let eltVideo = document.createElement('video');
        eltVideo.setAttribute("controls", "controls")
        eltVideo.setAttribute('src', element.video);
        eltVideo.setAttribute('role', 'button');
        eltVideo.className = 'photosMedia';
        return eltVideo;
    }
}