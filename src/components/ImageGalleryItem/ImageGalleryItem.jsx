import React from 'react';
import { GalleryImg, GalleryBar} from './ImageGalleryItem.styled';
import PropTypes from 'prop-types';
import { Gallery } from '../ImageGallery/ImageGallery.styled';

const ImageGalleryItem = ({ images, onSelect, onClick }) => (
 
  <Gallery>  
    {images.map(image => (
      <GalleryBar key={image.id}
               
                  onClick={() => onSelect(image.largeImageURL)}>
        <GalleryImg src={image.webformatURL}
                    alt="Image"
                    onClick={onClick} />
      </GalleryBar>
    ))}
  </ Gallery>
);
  
   ImageGalleryItem.propTypes = {
       onClick: PropTypes.func.isRequired,
       apiImages: PropTypes.arrayOf(
        PropTypes.shape(
        {id: PropTypes.string.isRequired, 
          webformatURL: PropTypes.string.isRequired,
           largeImageURL: PropTypes.string.isRequired} 
        ))
  }; 

export default ImageGalleryItem;
