import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Overlay, Modal, ModalImage} from './Modal.styled';
import {createPortal} from 'react-dom';

const modalRoot = document.querySelector('#modal-root');


class ModalWindow extends Component {

  static propTypes = {
    children: PropTypes.node,
    onClick: PropTypes.func,
  }

componentDidMount() {
  console.log('Modal componentDidMount');
  window.addEventListener('keydown', this.handleKeyDown);
};

componentWillUnmount () {
  console.log('Modal componentWillUnmount');
  window.addEventListener('keydown', this.handleKeyDown);
}

handleKeyDown = e => {
  console.log('Esc')
  if(e.code === 'Escape') {
    this.props.onClose();
  }
};

handleBackdropClick = event => {
console.log('drop')
  if(event.currentTarget === event.target) {
    this.props.onClose();
  }
}



render() {
   const {src} = this.props  
    return createPortal(
        <Overlay onClick={this.handleBackdropClick}>
        <Modal> {this.props.children}
       {src &&  <ModalImage src={src} alt="image"/>}
        </Modal>
      </Overlay>, modalRoot,
      
    );
 };
};

export default ModalWindow;