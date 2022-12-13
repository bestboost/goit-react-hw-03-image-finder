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
       apiImages: [],
       searchField: '',
        loading: false,
        showModal: false,
 };


//  {id: '', webformatURL: '', largeImageURL: ''} 
 componentDidMount() {
  this.setState({loading: true});

   fetch('https://pixabay.com/api/?q=cat&page=1&key=29692752-5f9a27c26e6deec7970509d3f&image_type=photo&orientation=horizontal&per_page=12')
      .then(res => res.json())
      .then(apiImages => this.setState({apiImages: apiImages.hits}))
      .finally(() => this.setState({loading: false}));
     
  };

  formSubmit = query => {
    this.setState({searchField: query});
  }
 
 toggleModal = () => {
  this.setState(({showModal}) => ({
    showModal: !showModal,
  }));
 }; 



 render() {
  const {apiImages, showModal} = this.state;
  const datas = apiImages
  
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
      <Searchbar onSearch={this.formSubmit}/>
      <ImageGallery>
        <ImageGalleryItem onClick={this.toggleModal}/>
      </ImageGallery>
       <LoderButton/>
       {this.state.loading && <Loader/>} 
      {showModal && <ModalWindow onClose={this.toggleModal}/>} 
      
    </Box>
  ); 
 };
};

export default App;
