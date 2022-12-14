import React from "react";
import { Audio } from 'react-loader-spinner';
// import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
const Loader = () => {  
    return(       
       <Audio 
    
  height="40"
  width="40"
  radius="9"
  color= "blue"
  ariaLabel="loading"
  wrapperStyle={{margin: 'auto'}}
/>
    )
};

export default Loader;

