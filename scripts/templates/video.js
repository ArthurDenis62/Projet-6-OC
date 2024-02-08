function displayVideoGalery (media, photographer) {
    const videoElement = document.createElement('div');
    videoElement.classList.add('photograph');
    videoElement.innerHTML = `<a href="assets/images/SamplePhotos/${photographer.name.split(' ')[0]}/${media.video}" aria-label={photographer.name}>
                                    <video class="videoGallery">
                                        <source src="assets/images/SamplePhotos/${photographer.name.split(' ')[0]}/${media.video}" alt="${media.title}" type="video/mp4" />
                                    </video>
                                    <div class="details">
                                        <h3 aria-label={media.title}>${media.title}</h3>
                                        <p class="likesText" tabindex="0" aria-label={media.likes}><span class="numberLikes">${media.likes}</span> <img src="assets/images/coeur.svg" alt="coeur" /></p>
                                    </div>
                                </a>`;
    document.querySelector('#photographGallery').appendChild(videoElement);
};

export default displayVideoGalery;