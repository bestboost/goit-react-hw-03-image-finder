import React, {Component} from 'react';
// import PropTypes from 'prop-types';
import {LoadButtonBox, LoadButton} from './Button.styled'; 



class LoderButton extends Component {
    //       static propTypes = {
//     state: PropTypes.shape ({
//        .isRequired
//     })
//  };


 render (){

    return (
      <LoadButtonBox>
        <LoadButton type="button" onClick={this.props.onClick}>Load more</LoadButton>
      </LoadButtonBox> 
    );
 };
};

export default LoderButton;