function displayImageGalery (media, photographer) {
    const imageElement = document.createElement('div');
    imageElement.classList.add('photograph');
    imageElement.innerHTML = `<a href="assets/images/SamplePhotos/${photographer.name.split(' ')[0]}/${media.image}">
                                  <img src="assets/images/SamplePhotos/${photographer.name.split(' ')[0]}/${media.image}" alt="${media.title}" class="photographImg" />
                                  <div class="details">
                                      <h3>${media.title}</h3>
                                      <p class="likesText" tabindex="0"><span class="numberLikes">${media.likes}</span> <img src="assets/images/coeur.svg" alt="coeur" /></p>
                                  </div>
                              </a>`;
    document.querySelector('#photographGallery').appendChild(imageElement);
};

export default displayImageGalery;