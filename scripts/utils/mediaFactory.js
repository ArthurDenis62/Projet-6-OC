import displayImageGalery from '../templates/image.js'
import displayVideoGalery from '../templates/video.js'

// Affiche les images et vidéos des photographes dans leur galery
function mediaFactory (media, photographer) {
  if (media.image) {
    return displayImageGalery(media, photographer)
  } else if (media.video) {
    return displayVideoGalery(media, photographer)
  } else {
    throw new Error('media inconnu')
  }
}

export default mediaFactory
