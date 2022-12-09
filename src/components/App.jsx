import React, {Component} from 'react';
import { Box } from '../components/Box';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import ImageGalleryItem from './ImageGalleryItem/ImageGalleryItem';
import LoderButton from './Button/Button';
import ModalWindow from './Modal/Modal';
// import Loader from './Loader/Loader';

class App extends Component  {

 state = {
        // id , 
        // webformatURL, 
        // largeImageURL
        showModal: false,
 };

 toggleModal = () => {
  this.setState(({showModal}) => ({
    showModal: !showModal,
  }));
 }; 


 render() {
  const {showModal} = this.state;
  return (
    <Box
      style={{
        display: 'grid',
        gridTemplateColumns: '1fr',
        gridGap: '16',
        paddingBottom: '24',
      }}
    >
      <Searchbar />
      <button type="button" onClick={this.toggleModal}>O</button>
      <ImageGallery>
      <ImageGalleryItem />
      </ImageGallery>
       <LoderButton/>
       {/* <Loader/>  */}
      {showModal && (<ModalWindow onClose={this.toggleModal}>
       <button type="button" onClick={this.toggleModal}>X</button>
      </ModalWindow>)} 
      
    </Box>
  ); 
 };
};

export default App;
