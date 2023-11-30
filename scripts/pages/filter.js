// factory.js
const createSortMenu = (containerId, selectId, options, labelId) => {
    const container = document.getElementById(containerId);
    
    const label = document.createElement('label');
    label.textContent = 'Order by';
    label.id = labelId;

    const select = document.createElement('select');
    select.id = selectId;
    select.setAttribute('aria-labelledby', labelId);

    options.forEach((optionText, index) => {
        const option = document.createElement('option');
        option.textContent = optionText;
        option.value = index;
        select.appendChild(option);
    });

    container.appendChild(label);
    container.appendChild(select);

    return select;
};

// Appelle la fonction pour créer le menu de tri
const sortMenu = createSortMenu('orderByContainer', 'orderBy', ['Popularité', 'Date', 'Titre'], 'orderLabel');
