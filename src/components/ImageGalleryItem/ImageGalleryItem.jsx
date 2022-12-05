import React, {Component} from 'react';
import { GalleryImg, GalleryBar} from './ImageGallery.styled';
import PropTypes from 'prop-types';

const { Component } = require("react");

class ImageGalleryItem extends Component {
    //       static propTypes = {
//     state: PropTypes.shape ({
//        .isRequired
//     })
//  };

render (){

    return (
        <GalleryBar class="gallery-item">
           <GalleryImg src="" alt="" />
        </GalleryBar>
    )
  };
};

export default ImageGalleryItem;