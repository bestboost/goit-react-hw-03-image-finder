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
  window.addEventListener('keydown', this.handleKeyDown);
};

componentWillUnmount () {
  window.removeEventListener('keydown', this.handleKeyDown);
}

handleKeyDown = event => {
  if(event.code === 'Escape') {
    this.props.onClose();
  }
};

handleBackdropClick = event => {
  if(event.currentTarget === event.target) {
    this.props.onClose();
  };
};

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