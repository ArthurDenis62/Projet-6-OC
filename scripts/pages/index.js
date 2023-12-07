async function displayData(photographers) {
    const photographersSection = document.querySelector(".photographer_section");

    photographers.forEach((photographer) => {
        const photographerModel = photographerTemplate(photographer);
        const userCardDOM = photographerModel.getUserCardDOM();
        photographersSection.appendChild(userCardDOM);
    });
}

async function getPhotographers() {
    try {
        const response = await fetch('data/photographers.json')
        const data = await response.json()
        return data;
    } catch(e) {
        console.error('Erreur de chargement du fichier JSON :', error)
    }
}