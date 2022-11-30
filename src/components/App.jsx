import React, {Component} from 'react';
// import { Box } from '../components/Box';
// import PropTypes from 'prop-types';
// import Searchbar from './Searchbar/Searchbar';
// import ImageGallery from './ImageGallery/ImageGallery';

class App extends Component  {
//   static propTypes = {
//     state: PropTypes.shape ({
//        .isRequired
//     })
//  };

 state = {

 };


 render() {
  return (
    <div
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
      {/* <ImageGallery/> */}
    </div>
  );
 };
};

export default App;
