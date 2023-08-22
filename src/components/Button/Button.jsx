import React from 'react';
import {LoadButtonBox, LoadButton} from './Button.styled'; 

const LoderButton = ({onClick}) => (

      <LoadButtonBox>
           <LoadButton type="button"
                        onClick={onClick}
               >Load more</LoadButton>
      </LoadButtonBox> 
    );

export default LoderButton;