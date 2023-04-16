import './ImageContainer.css';
import { Component } from "react";

interface ImageContainerProps {
    imageUrl: string;
    altText: string;
    containerStyle?: React.CSSProperties;
}

class ImageContainer extends Component<ImageContainerProps> {
    render() {
        const { imageUrl, altText, containerStyle } = this.props;
        return (
            <div className="image-container" style={containerStyle}>
                <img
                    src={imageUrl}
                    alt={altText}
                    className="img-element" />
            </div>
        );
    }
}

export default ImageContainer;