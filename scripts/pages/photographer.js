import mediaFactory from "../utils/mediaFactory.js";
import getData from "../utils/function.js";
import Lightbox from "../utils/lightbox.js";

const urlParams = new URLSearchParams(window.location.search);
const photographerId = urlParams.get('id');
let medias = []
const data = await getData()
const photographer = data.photographers.find(elt => elt.id === parseInt(photographerId))

document.querySelector('.name').textContent = photographer.name;
document.querySelector('.city').textContent = `${photographer.city}, ${photographer.country}`;
document.querySelector('.tagline').textContent = photographer.tagline;
document.querySelector('.photographerImg').src = `assets/images/SamplePhotos/PhotographersIDPhotos/${photographer.portrait}`;
document.querySelector('#contact_modal header h2:nth-child(2)').textContent = photographer.name;

medias = [...data.media.filter(p => p.photographerId === parseInt(photographerId))];
orderAndDisplayGallery('popularity')

function orderAndDisplayGallery (order) {
  switch (order) {
    case 'date':
      medias.sort((a, b) => new Date(a.date) - new Date(b.date));
      break;
    case 'popularity':
      medias.sort((a, b) => b.likes - a.likes);
      break;
    case 'title':
      medias.sort((a, b) => a.title.localeCompare(b.title))
      break;
    default:
      console.log("Y'a une erreur")
      break;
  }
  document.querySelector('#photographGallery').innerHTML = '';
  medias.forEach(elt => {
    mediaFactory(elt, photographer);
  })
  Lightbox.init();
}
document.querySelector("#filter").addEventListener('change', (e) => {
  orderAndDisplayGallery(e.target.value)
});