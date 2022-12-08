import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Overlay, Modal, ModalImage} from './Modal.styled';


class ModalWindow extends Component {

    //       static propTypes = {
//     state: PropTypes.shape ({
//        .isRequired
//     })
//  };


render() {
     
    return (
        <Overlay>
        <Modal>
          <ModalImage src="" alt="" />
        </Modal>
      </Overlay>
      
    );
 };
};

export default ModalWindow;