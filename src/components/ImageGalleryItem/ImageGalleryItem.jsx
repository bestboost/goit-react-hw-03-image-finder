import React, {Component} from 'react';
import { GalleryImg, GalleryBar} from './ImageGalleryItem.styled';
import PropTypes from 'prop-types';
import { Gallery } from '../ImageGallery/ImageGallery.styled';

class ImageGalleryItem extends Component {
          static propTypes = {
       onClick: PropTypes.func.isRequired,
       apiImages: PropTypes.arrayOf(
        PropTypes.shape(
        {id: PropTypes.string.isRequired, 
          webformatURL: PropTypes.string.isRequired,
           largeImageURL: PropTypes.string.isRequired} 
       ))
     };

render (){
 
    return (
      <Gallery>
      
        {this.props.images.map(image => (
        <GalleryBar key={image.id} onClick={() => this.props.onSelect(image.largeImageURL)}>
           <GalleryImg  src={image.webformatURL} alt="Image"  onClick={this.props.onClick} />
        </GalleryBar>
        ))}
    </ Gallery> 
    )
  };
};

export default ImageGalleryItem;
