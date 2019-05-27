// 1. Import our Data
import Data from "./script/Data";
// 2. Import our Model Classes
import Image from "./script/Image";
import Gallery from "./script/Gallery";
// 3. Import View Controller
import GalleryViewController from "./script/GalleryViewController";

let main = () => {
    // TODO:
    // 1. Map plain-old image object data to Image objects
    let images = Data.map((data) => new Image(data.thumbSrc, data.src));
    
    // 2. Construct Gallery model
    let gallery = new Gallery(images);

    // 3. Establish View in DOM
    let galleryView = document.getElementById("gallery");

    // 4. Construct View Controller
    let viewController = new GalleryViewController(gallery, galleryView);

    // 5. Select the first Image in the Gallery
    gallery.selected = images[0];
};

window.addEventListener("load", main);