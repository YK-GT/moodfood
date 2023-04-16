import './ImageSelector.css';
import { Component } from "react";
import ImageContainer from '../ImageContainer/ImageContainer';

interface ImageSelectorProps {
    imageUrl1: string;
    altText1: string;
    imageUrl2: string;
    altText2: string;
    containerStyle?: React.CSSProperties;
}

class ImageSelector extends Component<ImageSelectorProps> {
    render() {
        const { imageUrl1, altText1, imageUrl2, altText2, containerStyle } = this.props;

        return (
            <div className='.selector-container' style={containerStyle}>
                <ImageContainer
                    imageUrl={imageUrl1}
                    altText={altText1}
                />
                <div className='divider'></div>
                <ImageContainer
                    imageUrl={imageUrl2}
                    altText={altText2}
                />
            </div>
        );
    }
}

export default ImageSelector;
