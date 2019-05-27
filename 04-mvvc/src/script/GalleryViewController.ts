import Gallery from "./Gallery";
import Image from "./Image";

export default class GalleryViewController {

    private model: Gallery;
    private view: HTMLElement;
    private masterList: HTMLElement;
    private thumbnailTemplate: HTMLTemplateElement;

    private thumbsToImages: Map<HTMLElement, Image>;
    private imagesToThumbs: Map<Image, HTMLElement>;

    constructor(model: Gallery, view: HTMLElement) {
        // Initialize members
        this.model = model;
        this.view = view;
        this.thumbsToImages = new Map();
        this.imagesToThumbs = new Map();

        // Initialize view(s)
        this.initView(view);

        // Listen for selected events on model
        
        // Listen for click events on the masterList (delegation)
        
    }

    private initView(view: HTMLElement) {
        // 1. Establish View Property
        
        // 2. Find Master List Element

        // 3. Find the Thumbnail Template

        // 4. For each image:
        // 4.1 Establish thumbnail documentfragment for image
        // 4.2 Get a reference to firstElementChild as HTML element (actual node added to dom)
        // 4.3 Establish mappings of thumbs to images, images to thumbs
        // 4.4 Append the thumbnail to the masterList

    }

    private thumbnailForImage(image: Image): HTMLElement {
        // Clone the template

        // TODO: Fill in the src of the .gallery__thumb-img, return clone
        return null;
    }

    private handleMasterListClick(event: MouseEvent) {
        // 1. Find the target of the click

        // 2. Find the closest .gallery__thumb parent

        // 3. Lookup the image for the thumbnail

        // 4. Update the selected property of the gallery to the image

    }

    private updateSelected() {
        // 1. Remove selected class from previously selected thumbnail (.gallery__thumb.selected)


        // 2. Add selected class to currently selected thumbnail


        // 3. Handle detail picture source of .gallery__detail-img

    }

}