import getData from '../utils/function.js'
import photographerTemplate from '../templates/photographer.js'

// Fonction pour l'affichage des photographes
async function displayData (photographers) {
  const photographersSection = document.querySelector('.photographer_section')

  photographers.forEach((photographer) => {
    const photographerModel = photographerTemplate(photographer)
    const userCardDOM = photographerModel.getUserCardDOM()
    photographersSection.appendChild(userCardDOM)
  })
}

const data = await getData()
displayData(data.photographers)
