import React, {Component} from 'react';
import { Box } from '../components/Box';
// import PropTypes from 'prop-types';
// import Searchbar from './Searchbar/Searchbar';
// import ImageGallery from './ImageGallery/ImageGallery';
// import ImageGalleryItem from './ImageGalleryItem/ImageGalleryItem';
// import LoderButton from './Button/Button';
import Loader from './Loader/Loader';

class App extends Component  {
//   static propTypes = {
//     state: PropTypes.array ({
//        id: PropTypes.string.isRequired,
//         webformatURL: PropTypes.string.isRequired, 
//         largeImageURL: PropTypes.string.isRequired, 
//     })
//  };

 state = {
        // id , 
        // webformatURL, 
        // largeImageURL
 };


 render() {
  return (
    <Box
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
      React homework template
      {/* <Searchbar onSubmit={}/> */}
      {/* <ImageGallery/>  */}
      {/* <ImageGalleryItem /> */}
       {/* <LoderButton/> */}
       <Loader/> 
      {/* <ModalWindow /> */}
    </Box>
  );
 };
};

export default App;
