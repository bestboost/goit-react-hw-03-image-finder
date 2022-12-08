import React, {Component} from 'react';
import { Box } from '../components/Box';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import ImageGalleryItem from './ImageGalleryItem/ImageGalleryItem';
import LoderButton from './Button/Button';
// import ModalWindow from './Modal/Modal';
// import Loader from './Loader/Loader';

class App extends Component  {

 state = {
        // id , 
        // webformatURL, 
        // largeImageURL
 };


 render() {
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
      <ImageGallery>
      <ImageGalleryItem />
      </ImageGallery>
       <LoderButton/>
       {/* <Loader/>  */}
      {/* <ModalWindow /> */}
    </Box>
  );
 };
};

export default App;
