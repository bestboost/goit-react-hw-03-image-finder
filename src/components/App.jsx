import React, {Component} from 'react';
import { Box } from '../components/Box';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import ImageGalleryItem from './ImageGalleryItem/ImageGalleryItem';
import LoderButton from './Button/Button';
import ModalWindow from './Modal/Modal';
import Loader from './Loader/Loader';

class App extends Component  {

 state = {
       apiImages: [] ,
        loading: false,
        showModal: false,
 };
//  {id: '', webformatURL: '', largeImageURL: ''} 
 componentDidMount() {
  this.setState({loading: true});

   fetch('https://pixabay.com/api/?q=cat&page=1&key=29692752-5f9a27c26e6deec7970509d3f&image_type=photo&orientation=horizontal&per_page=12')
      .then(res => res.json())
      .then(apiImages => this.setState({apiImages}))
      .finally(() => this.setState({loading: false}));
     
     
  };

 
 toggleModal = () => {
  this.setState(({showModal}) => ({
    showModal: !showModal,
  }));
 }; 



 render() {
  const {apiImages, showModal} = this.state;
  const datas = this.state.apiImages.hits
  console.log(datas)
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
        <ImageGalleryItem onClick={this.toggleModal}  src={apiImages.webformatURL}/>
      </ImageGallery>
       <LoderButton/>
       {this.state.loading && <Loader/>} 
      {showModal && <ModalWindow onClose={this.toggleModal}/>} 
      
    </Box>
  ); 
 };
};

export default App;
