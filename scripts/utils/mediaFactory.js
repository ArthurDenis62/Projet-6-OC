import displayImageGalery from "../templates/image.js";
import displayVideoGalery from "../templates/video.js";

function mediaFactory (media, photographer) {
    if (media.image) {
        return displayImageGalery(media, photographer);
    } else if (media.video) {
        return displayVideoGalery(media, photographer);
    } else {
        throw new Error("media inconnu");
    }
}

export default mediaFactory;