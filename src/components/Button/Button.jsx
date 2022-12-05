import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {LoadButton} from './Button.styled'; 



class LoderButton extends Component {
    //       static propTypes = {
//     state: PropTypes.shape ({
//        .isRequired
//     })
//  };

 render (){

    return (
      <LoadButton type="button">Load more</LoadButton>
    );
 };
};

export default LoderButton;