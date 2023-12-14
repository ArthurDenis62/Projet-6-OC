function displayVideoGalery (media, photographer) {
    const videoElement = document.createElement('div');
    videoElement.classList.add('photograph');
    videoElement.innerHTML = `<a href="assets/images/SamplePhotos/${photographer.name.split(' ')[0]}/${media.video}">
                                    <video class="videoGallery">
                                        <source src="assets/images/SamplePhotos/${photographer.name.split(' ')[0]}/${media.video}" alt="${media.title}" type="video/mp4" />
                                    </video>
                                    <div class="details">
                                        <h3>${media.title}</h3>
                                        <p id="likesText">${media.likes} <img src="assets/images/coeur.svg" alt="coeur" /></p>
                                    </div>
                                </a>`;
    document.querySelector('#photographGallery').appendChild(videoElement);
};

export default displayVideoGalery;