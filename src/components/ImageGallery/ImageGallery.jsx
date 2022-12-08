import React, {Component} from 'react';
import { Gallery } from './ImageGallery.styled';

class ImageGallery extends Component {

  render () {   
        
        return (
        <Gallery>{this.props.children}
        </ Gallery> 
     )
  };      
};

export default ImageGallery;