import React, {Component} from 'react';
import { Box } from '../components/Box';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import ImageGalleryItem from './ImageGalleryItem/ImageGalleryItem';
import LoderButton from './Button/Button';
import ModalWindow from './Modal/Modal';
import Loader from './Loader/Loader';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


class App extends Component  {

 state = {
       apiImages: '',
       searchField: '',
        loading: false,
        showModal: false,
        inputValue: '',
        error: null,
 };


//  {id: '', webformatURL: '', largeImageURL: ''} 


  componentDidUpdate(prevProps, prevState) {

     const prevValue = prevState.inputValue;
     const nextValue = this.state.inputValue;

    if (prevValue !== nextValue) {
      this.setState({loading: true})
      console.log('change value');
      
      fetch(`https://pixabay.com/api/?q=${nextValue}&page=1&key=29692752-5f9a27c26e6deec7970509d3f&image_type=photo&orientation=horizontal&per_page=12`)
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
    this.setState({ inputValue});
  }
 
 toggleModal = () => {
  this.setState(({showModal}) => ({
    showModal: !showModal,
  }));
 }; 



 render() {
  const {apiImages, showModal, loading, error} = this.state;
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
    
      {apiImages  && <ImageGallery>
           <ImageGalleryItem onClick={this.toggleModal}/>
           <LoderButton/>
      </ImageGallery>
      }
       {error && <h1>{error.message}</h1>}
      {loading && <Loader/>} 
      {showModal && <ModalWindow onClose={this.toggleModal}/>}
      <ToastContainer autoClose={3000} position="top-center"/>
    </Box>
  ); 
 };
};

export default App;
