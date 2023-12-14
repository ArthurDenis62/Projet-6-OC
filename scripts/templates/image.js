function displayImageGalery (media, photographer) {
    const imageElement = document.createElement('div');
    imageElement.classList.add('photograph');
    imageElement.innerHTML = `
      <img src="assets/images/SamplePhotos/${photographer.name.split(' ')[0]}/${media.image}" alt="${media.title}" class="photographImg" />
      <div class="details">
        <h3>${media.title}</h3>
        <p id="likesText">${media.likes} <img src="assets/images/coeur.svg" alt="coeur" /></p>
      </div>
    `;
    document.querySelector('#photographGallery').appendChild(imageElement);
}

export default displayImageGalery;