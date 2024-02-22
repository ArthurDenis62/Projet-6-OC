// Affiche le total de like et le prix du photographe
const displayLikesAndPrice = (medias, price) => {
    document.querySelector(".likes").textContent = totalLikes(medias)
    document.querySelector(".price").textContent = price + " € /jour"
}

const totalLikes = (medias) => {
    return medias.reduce(function (acc, media) {
        return acc + media.likes
    }, 0)
}

export {displayLikesAndPrice, totalLikes}