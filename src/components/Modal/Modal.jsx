import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Overlay, Modal, ModalImage} from './Modal.styled';
import {createPortal} from 'react-dom';

const modalRoot = document.querySelector('#modal-root');


class ModalWindow extends Component {
 
componentDidMount() {
  console.log('Modal componentDidMount');

  window.addEventListener('keydown', e => {
    if(e.code === 'Escape') {
 
      this.props.onClose();
    }
  });

};

componentDidUpdate() {
  console.log('Modal componentDidUpdate');
}


render() {
     
    return createPortal(
        <Overlay>
        <Modal> 
    
          {this.props.children}
          <ModalImage src="" alt="" />
        </Modal>
      </Overlay>, modalRoot,
      
    );
 };
};

export default ModalWindow;