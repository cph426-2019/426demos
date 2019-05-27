import Data from "./script/Data";
import Gallery from "./script/Gallery";
import Image from "./script/Image";
import GalleryViewController from "./script/GalleryViewController";

let main = () => {

    // Map plain-old image object data to Image objects
    let images = Data.map((data) => new Image(data.thumbSrc, data.src));
    
    // Reduce Images into a Gallery
    let gallery = new Gallery(images);

    // Establish link to DOM
    let galleryView = document.getElementById("gallery");

    // Finally, establish ViewController
    let viewController = new GalleryViewController(gallery, galleryView);

    // Select the first Image in the Gallery
    gallery.selected = images[0];

    window["gallery"] = gallery;

};

window.addEventListener("load", main);