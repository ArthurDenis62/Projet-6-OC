function displayVideoGalery (media, photographer) {
    const videoElement = document.createElement('div');
    videoElement.classList.add('photograph');
    videoElement.innerHTML = `
    <video class="videoGallery">
        <source src="assets/images/SamplePhotos/${photographer.name.split(' ')[0]}/${media.video}" alt="${media.title}" type="video/mp4" />
        <p>
            Votre navigateur ne prend pas en charge les vidéos HTML5. Voici
            <a href="assets/images/SamplePhotos/${photographer.name.split(' ')[0]}/${media.video}">un lien pour télécharger la vidéo</a>.
        </p> 
    </video>
        <div class="details">
            <h3>${media.title}</h3>
            <p id="likesText">${media.likes} <img src="assets/images/coeur.svg" alt="coeur" /></p>
        </div>
    `;
    document.querySelector('#photographGallery').appendChild(videoElement);
}

export default displayVideoGalery;