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
        this.model = model;
        this.view = view;

        this.thumbsToImages = new Map();
        this.imagesToThumbs = new Map();
        this.initView(view);

        // Listen for selected events on model
        this.model.addEventListener("selected", this.updateSelected.bind(this));
        // Listen for click events on the masterList (delegation)
        this.masterList.addEventListener("click", this.handleMasterListClick.bind(this));
    }

    private initView(view: HTMLElement) {
        // 1. Establish View Property
        this.view = view;
        // 2. Find Master List Element
        this.masterList = this.view.querySelector(".gallery__master");
        // 3. Find the Thumbnail Template
        this.thumbnailTemplate = this.view.querySelector("template.gallery__thumb_template");

        // 4. For each image:
        // 4.1 Establish thumbnail documentfragment for image
        // 4.2 Get a reference to firstElementChild as HTML element (actual node added to dom)
        // 4.3 Establish mappings of thumbs to images, images to thumbs
        // 4.4 Append the thumbnail to the masterList
        this.model.images.forEach((image) => {
            let thumbnail = this.thumbnailForImage(image);
            let thumbnailElement = thumbnail.firstElementChild as HTMLElement;
            this.thumbsToImages.set(thumbnailElement, image);
            this.imagesToThumbs.set(image, thumbnailElement);
            this.masterList.appendChild(thumbnail);
        });
    }

    private thumbnailForImage(image: Image): HTMLElement {
        // Clone the template
        let clone = this.thumbnailTemplate.content.cloneNode(true) as HTMLElement;
        // TODO: Fill in the src of the .gallery__thumb-img
        let img = clone.querySelector(".gallery__thumb-img") as HTMLImageElement;
        img.src = image.thumbSrc;
        return clone;
    }

    private handleMasterListClick(event: MouseEvent) {
        // 1. Find the target of the click
        let target = event.target as HTMLElement;
        // 2. Find the closest .gallery__thumb parent
        let thumb = target.closest(".gallery__thumb") as HTMLElement;
        // 3. Lookup the image for the thumbnail
        let image = this.thumbsToImages.get(thumb);
        // 4. Update the selected property of the gallery to the image
        this.model.selected = image;
    }

    private updateSelected() {
        // 1. Remove selected class from previously selected thumbnail (.gallery__thumb.selected)
        let previousThumb = this.view.querySelector(".gallery__thumb.selected");
        if (previousThumb !== null) {
            previousThumb.classList.remove("selected");
        }

        // 2. Add selected class to currently selected thumbnail
        let nextThumb = this.imagesToThumbs.get(this.model.selected);
        nextThumb.classList.add("selected");

        // 3. Handle detail picture source of .gallery__detail-img
        let detail = this.view.querySelector(".gallery__detail-img") as HTMLImageElement;
        detail.src = this.model.selected.src;
    }

}