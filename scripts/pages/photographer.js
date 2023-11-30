import mediaFactory from "../utils/mediaFactory.js";

const urlParams = new URLSearchParams(window.location.search);
const photographerId = urlParams.get('id');

fetch('data/photographers.json')
  .then(response => response.json())
  .then(data => {
    const photographer = data.photographers.find(p => p.id == photographerId);

    document.querySelector('.name').textContent = photographer.name;
    document.querySelector('.city').textContent = `${photographer.city}, ${photographer.country}`;
    document.querySelector('.tagline').textContent = photographer.tagline;
    document.querySelector('.photographerImg').src = `assets/images/SamplePhotos/PhotographersIDPhotos/${photographer.portrait}`;
    document.querySelector('#contact_modal header h2:nth-child(2)').textContent = photographer.name;

    const medias = data.media.filter(p => p.photographerId == photographerId);
    const galleryContainer = document.getElementById('photographGallery');
    medias.forEach(media => {
      const element = mediaFactory(media, photographer);
      galleryContainer.appendChild(element);
    });
})
  .catch(error => console.error('Erreur de chargement du fichier JSON', error));
