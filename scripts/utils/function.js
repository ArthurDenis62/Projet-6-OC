// Récupère les données du .json
async function getData() {
    try {
        const response = await fetch('data/photographers.json')
        const data = await response.json()
        return data;
    } catch(e) {
        console.error('Erreur de chargement du fichier JSON :', error)
    }
}

export default getData