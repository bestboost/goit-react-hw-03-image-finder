import React, {Component} from 'react';
import { GalleryImg, GalleryBar} from './ImageGalleryItem.styled';
import PropTypes from 'prop-types';

class ImageGalleryItem extends Component {
          static propTypes = {
       onClick: PropTypes.func.isRequired
  
     };

     state = {
      activeTabIdx: 0,
     };

    

     setActiveTabInx = idx => {
      this.setState({activeTabIdx: idx});
     }

render (){
    // const {activeTabIdx} = this.state;
    // const {items} = this.props;
    // const activeTab = items[activeTabIdx];
    // onChange={(() => this.setActiveTabInx(idx))}
    return (
        <GalleryBar>
           <GalleryImg  src="" alt="Image"  onClick={this.props.onClick}/>
        </GalleryBar>
           
    )
  };
};

export default ImageGalleryItem;
