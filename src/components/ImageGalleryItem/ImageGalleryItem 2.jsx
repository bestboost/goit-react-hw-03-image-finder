import React, {Component} from 'react';
import { GalleryImg, GalleryBar} from './ImageGalleryItem.styled';
// import PropTypes from 'prop-types';

class ImageGalleryItem extends Component {
    //       static propTypes = {
//        .isRequired
//   
//  };

render (){

    return (
        <GalleryBar>
           <GalleryImg src="" alt="" />
        </GalleryBar>
    )
  };
};

export default ImageGalleryItem;
