import mediaFactory from "../utils/mediaFactory.js";

const urlParams = new URLSearchParams(window.location.search);
const photographerId = urlParams.get('id');
let medias = []
const photographer = getPhotographers(photographerId)

document.querySelector('.name').textContent = photographer.name;
document.querySelector('.city').textContent = `${photographer.city}, ${photographer.country}`;
document.querySelector('.tagline').textContent = photographer.tagline;
document.querySelector('.photographerImg').src = `assets/images/SamplePhotos/PhotographersIDPhotos/${photographer.portrait}`;
document.querySelector('#contact_modal header h2:nth-child(2)').textContent = photographer.name;

medias = [...data.media.filter(p => p.photographerId == photographerId)];

document.querySelector("#filter").addEventListener('change', (e) => {
  switch (e.target.value) {
    case 'date':
      medias.sort((a, b) => new Date(a.date) - new Date(b.date));
      break;
    case 'popularity':
      medias.sort((a, b) => b.likes - a.likes);
      break;
    case 'tilte':
      medias.sort((a, b) => a.title.localeCompare(b.title))
      break;
    default:
      console.log("Y'a une erreur")
      break;
  }
  mediaFactory(medias, photographer);
});