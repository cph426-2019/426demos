import Image from "./Image";

export default class Gallery implements EventTarget {

    constructor(public images: Image[]) {}

    // selected Property keeps track of currently selected Image
    private _selected: Image = null;

    get selected(): Image {
        return this._selected;
    }

    set selected(image: Image) {
        if (this._selected !== image) {
            this._selected = image;
            this.dispatchEvent(new Event('selected'));
        }
    }

    // Delegate EventTarget method calls to this.eventDelegate
    private eventDelegate: EventTarget = new EventTarget();

    addEventListener(...args: any): void {
        this.eventDelegate.addEventListener.apply(this.eventDelegate, args);
    }

    dispatchEvent(...args: any): boolean {
        return this.eventDelegate.dispatchEvent.apply(this.eventDelegate, args);
    }

    removeEventListener(...args: any): void {
        this.eventDelegate.removeEventListener.apply(this.eventDelegate, args);
    }

}