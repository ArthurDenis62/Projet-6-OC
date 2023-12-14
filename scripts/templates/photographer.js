function photographerTemplate(data) {
    const { name, portrait, city, country, tagline, price, id } = data;
    const picture = `assets/images/SamplePhotos/PhotographersIDPhotos/${portrait}`;

    function getUserCardDOM() {
        const article = document.createElement('article');
        const link = document.createElement('a');
        link.setAttribute("href", `photographer.html?id=${id}`);
        const img = document.createElement('img');
        img.setAttribute("src", picture);
        img.classList.add("photographerImgMain");
        const h2 = document.createElement('h2');
        h2.textContent = name;
        const h3 = document.createElement('h3');
        h3.textContent = `City: ${city}, Country: ${country}`;
        const h4 = document.createElement('h4');
        h4.textContent = `Tagline: ${tagline}`;
        const h5 = document.createElement('h5');
        h5.textContent = `Price: ${price}`;

        link.appendChild(img);
        link.appendChild(h2);
        link.appendChild(h3);
        link.appendChild(h4);
        link.appendChild(h5);

        article.appendChild(link)
        return article;
    }

    return { name, picture, getUserCardDOM };
}

fetch('data/photographers.json')
    .then(response => response.json())
    .then(data => photographerTemplate(data))
    .catch(error => console.error('Erreur de chargement du fichier JSON :', error));