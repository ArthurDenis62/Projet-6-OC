const createSortMenu = (containerId, selectId, options, labelId) => {
  // L'identifiant de l'élément HTML dans lequel le menu de tri sera ajouté
  const container = document.getElementById(containerId)

  const label = document.createElement('label')
  label.textContent = 'Order by'
  label.id = labelId

  // L'identifiant du menu déroulant select
  const select = document.createElement('select')
  select.id = selectId
  select.setAttribute('aria-labelledby', labelId)

  // Les options du menu de tri
  options.forEach((optionText, index) => {
    const option = document.createElement('option')
    option.textContent = optionText
    option.value = index
    select.appendChild(option)
  })

  container.appendChild(label)
  container.appendChild(select)

  return select
}

// Appelle la fonction pour créer le menu de tri
createSortMenu('orderByContainer', 'orderBy', ['Popularité', 'Date', 'Titre'], 'orderLabel')
