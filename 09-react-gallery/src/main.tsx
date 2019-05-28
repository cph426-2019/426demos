// 1. Import React Library
import * as React from "react";
import ReactDOM from "react-dom";

// 2. Import our Data
import Data from "./script/Data";

let main = () => {
    // TODO:
    ReactDOM.render(<Gallery images={Data} />, document.getElementById("galleryContainer"));
};

type Image = {
    src: string,
    thumbSrc: string
}

type GalleryProps = {
    images: Image[]
}

// TODO add selected state

class Gallery extends React.Component<GalleryProps> {
    render() {
        return <div className="gallery">
            <ul className="gallery__master"></ul>
            <div className="gallery__detail">
                <div className="gallery__detail-img-wrap">
                    <img className="gallery__detail-img"></img>
                </div>
            </div>
        </div>;
    }
}

type ThumbnailProps = {
    image: Image,
}

class Thumbnail extends React.Component<ThumbnailProps> {
    render() {
        return <li className={"gallery__thumb"}>
            <div className="gallery__thumb-img-wrap">
                <img className="gallery__thumb-img" />
            </div>
        </li>;
    }
}

window.addEventListener("load", main);