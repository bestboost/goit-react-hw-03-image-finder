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

    //  state = {
    //   activeTabIdx: 0,
    //  };

    

    //  setActiveTabInx = idx => {
    //   this.setState({activeTabIdx: idx});
    //  }

render (){
    // const {activeTabIdx} = this.state;
    // const {items} = this.props;
    // const activeTab = items[activeTabIdx];
    // onChange={(() => this.setActiveTabInx(idx))}

    // const {apiImages} = this.props;

    return (
      <Gallery>
      
        {this.props.images.map(image => (
        <GalleryBar key={image.id}>
           <GalleryImg  src={image.webformatURL} alt="Image"  onClick={this.props.onClick}/>
        </GalleryBar>
        ))}
    </ Gallery> 
    )
  };
};

export default ImageGalleryItem;
