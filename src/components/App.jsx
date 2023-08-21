import React, {Component} from 'react';
import { Box } from '../components/Box';
import Searchbar from './Searchbar/Searchbar';
import ImageGalleryItem from './ImageGalleryItem/ImageGalleryItem';
import LoderButton from './Button/Button';
import ModalWindow from './Modal/Modal';
import Loader from './Loader/Loader';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class App extends Component  {

 state = {
      apiImages: null,
      searchField: '',
      loading: false,
      showModal: false,
      inputValue: '',
      error: null,
      selectedImage: null,
      page: 1,
 };

  componentDidUpdate(_, prevState) {
     const prevValue = prevState.inputValue;
     const nextValue = this.state.inputValue;
     const prevPage = prevState.page;
     const nextPage = this.state.page;

    if (prevValue !== nextValue ||
      prevPage !== nextPage ) {
      this.setState({loading: true, apiImages: null})
      
      fetch(`https://pixabay.com/api/?q=${nextValue}&page=${nextPage}&key=29692752-5f9a27c26e6deec7970509d3f&image_type=photo&orientation=horizontal&per_page=12`)
      .then(response => {
        if(response.ok) {
          return response.json();
        } 
   
        return Promise.reject(
          new Error(`Upsss, no image ${nextValue}!`),
        );
     
      })

      .then(apiImages => this.setState({apiImages: apiImages.hits})) 
      .catch(error => this.setState({error})) 
      .finally(() => this.setState({loading: false}));
    
    } 
  }

  formSubmit =  inputValue => {
    this.setState({inputValue});
  }
 
  toggleModal = () => {
  this.setState(({showModal}) => ({
    showModal: !showModal,
  }));
 }; 

  selectImage = largeImageURL => {
  this.setState({selectedImage: largeImageURL});
}

  loadMore = () => {
  this.setState(prevState => ({
    page: prevState.page + 1,
  }));
};

 render() {
  const {apiImages, showModal, loading, error} = this.state;

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
     
      {apiImages && 
           <ImageGalleryItem images={this.state.apiImages} onClick={this.toggleModal} onSelect={this.selectImage}/>  
      }
       {apiImages === (null || []) &&
        <LoderButton onClick={this.loadMore}/>}
       {error && <h1>{error.message}</h1>}
      {loading &&  <Loader/>} 
      {showModal && <ModalWindow onClose={this.toggleModal} src={this.state.selectedImage}/>}
      <ToastContainer autoClose={3000} position="top-center"/>
    </Box>
  ); 
 };
};

export default App;
