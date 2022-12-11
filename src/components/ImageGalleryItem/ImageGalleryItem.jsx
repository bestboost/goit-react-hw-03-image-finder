import React, {Component} from 'react';
import { GalleryImg, GalleryBar} from './ImageGalleryItem.styled';
import PropTypes from 'prop-types';

class ImageGalleryItem extends Component {
          static propTypes = {
       onClick: PropTypes.func.isRequired
  
     };


render (){

    return (
        <GalleryBar>
           <GalleryImg src="" alt="Image"  onClick={this.props.onClick}/>
        </GalleryBar>
    )
  };
};

export default ImageGalleryItem;
