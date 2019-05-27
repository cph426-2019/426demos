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
        this.masterList.addEventListener("click", this.handleMasterListClick.bind(this));
    }

    private initView(view: HTMLElement) {
        this.view = view;
        this.masterList = this.view.querySelector(".gallery__master");
        this.thumbnailTemplate = this.view.querySelector("template.gallery__thumb_template");

        this.model.images.forEach((image) => {
            let thumbnail = this.thumbnailForImage(image);
            let thumbnailElement = thumbnail.firstElementChild as HTMLElement;
            this.thumbsToImages.set(thumbnailElement, image);
            this.imagesToThumbs.set(image, thumbnailElement);
            this.masterList.appendChild(thumbnail);
        });
    }

    private thumbnailForImage(image: Image): HTMLElement {
        let clone = this.thumbnailTemplate.content.cloneNode(true) as HTMLElement;
        // TODO: Fill in Properties
        let img = clone.querySelector(".gallery__thumb-img") as HTMLImageElement;
        img.src = image.thumbSrc;
        return clone;
    }

    private handleMasterListClick(event: MouseEvent) {
        let target = event.target as HTMLElement;
        let thumb = target.closest(".gallery__thumb") as HTMLElement;
        let image = this.thumbsToImages.get(thumb);
        this.model.selected = image;
    }

    private updateSelected() {
        // Remove selected class from previously selected thumbnail
        let previousThumb = this.view.querySelector(".gallery__thumb.selected");
        if (previousThumb !== null) {
            previousThumb.classList.remove("selected");
        }

        // Add selected class to currently selected thumbnail
        let nextThumb = this.imagesToThumbs.get(this.model.selected);
        nextThumb.classList.add("selected");

        // Handle detail picture source
        let detail = this.view.querySelector(".gallery__detail-img") as HTMLImageElement;
        detail.src = this.model.selected.src;
    }

}