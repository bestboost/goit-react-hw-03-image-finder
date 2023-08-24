import React, { Component } from 'react';
import { Box } from '../components/Box';
import Searchbar from './Searchbar/Searchbar';
import ImageGalleryItem from './ImageGalleryItem/ImageGalleryItem';
import LoderButton from './Button/Button';
import ModalWindow from './Modal/Modal';
import Loader from './Loader/Loader';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import fetchImagesAPI from './services/fetchImages-api';

class App extends Component {

  state = {
    apiImages: [],
    searchField: '',
    loading: false,
    showModal: false,
    inputValue: '',
    error: null,
    selectedImage: null,
    page: 1,
    showBtn: false,
  };

  componentDidUpdate(_, prevState) {
    const prevValue = prevState.inputValue;
    const nextValue = this.state.inputValue;
    const prevPage = prevState.page;
    const nextPage = this.state.page;

    if (prevValue !== nextValue ||
      prevPage !== nextPage) {
      this.setState({ loading: true, apiImages: [] })
      
      fetchImagesAPI
        .fetchImages(nextValue, nextPage)
        .then(apiImages => this.setState(prevState =>
        ({apiImages: [...prevState.apiImages, ...apiImages.hits],
          showBtn: this.showLoadBtn})))
        .catch(error => this.setState({ error }))
        .finally(() => this.setState({ loading: false }));    
    };
  };

  showLoadBtn(response) {
    if (this.state.page < Math.ceil(response.totalHits % 12)){
          this.setState({ showBtn: true })
    };
  };

  formSubmit = inputValue => {
    this.setState({ inputValue, apiImages: [], page:1 });
  };
 
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
  const {apiImages, showModal, loading, error, showBtn} = this.state;

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
        <ImageGalleryItem images={this.state.apiImages}
                          onClick={this.toggleModal}
                          onSelect={this.selectImage} /> }
       {showBtn &&
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
