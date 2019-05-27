// 1. Import React Library
import * as React from "react";
import ReactDOM from "react-dom";

// 2. Import our Data
import Data from "./script/Data";

let main = () => {
    // TODO:
    ReactDOM.render(<Gallery images={Data} />, document.getElementById("gallery"));
};

interface SelectImageHandler {
    (image: Image): void;
}

type ThumbnailProps = {
    image: Image,
    selected: boolean,
    onClick?: SelectImageHandler
}

class Thumbnail extends React.Component<ThumbnailProps> {
    handleClick() {
        if (this.props.onClick) {
            this.props.onClick(this.props.image);
        }
    }

    render() {
        return <li className={"gallery__thumb " + (this.props.selected ? "selected" : "")} onClick={this.handleClick.bind(this)}>
            <div className="gallery__thumb-img-wrap">
                <img className="gallery__thumb-img" src={this.props.image.thumbSrc} />
            </div>
        </li>;
    }
}

type Image = {
    src: string,
    thumbSrc: string
}

type MasterListProps = {
    selected: Image,
    images: Image[],
    onSelect?: SelectImageHandler
}

class MasterList extends React.Component<MasterListProps> {
    onSelect(image: Image) {
        if (this.props.onSelect) {
            this.props.onSelect(image);
        }
    }

    render() {
        return <ul className="gallery__master">
            {
                this.props.images.map((image, idx) => {
                    let selected = this.props.selected === image;
                    return <Thumbnail
                        image={image}
                        key={`thumb_${idx}`}
                        onClick={this.onSelect.bind(this)}
                        selected={selected}
                    />
                })
            }
        </ul>;
    }
}

type GalleryProps = {
    images: Image[]
}

type GalleryState = {
    selected: Image
}

class Gallery extends React.Component<GalleryProps, GalleryState> {
    constructor(props: GalleryProps) {
        super(props);
        this.state = { selected: props.images[0] };
    }

    onSelect(image: Image) {
        this.setState({ selected: image });
    }

    render() {
        return <div>
            <MasterList
                images={this.props.images}
                selected={this.state.selected}
                onSelect={this.onSelect.bind(this)} />
            <Details image={this.state.selected} />
        </div>;
    }
}

type DetailsProps = {
    image: Image
}

class Details extends React.Component<DetailsProps> {
    render() {
        return <div className="gallery__detail">
            <div className="gallery__detail-img-wrap">
                <img className="gallery__detail-img" src={this.props.image.src}></img>
            </div>
        </div>;
    }
}

window.addEventListener("load", main);