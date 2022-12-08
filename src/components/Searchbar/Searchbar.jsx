import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Search, Form, SearchButton, SearchLabel, SearchInput} from './Searchbar.styled'

class Searchbar extends Component {

//       static propTypes = {
//   
//        .isRequired
//  };

render (){

    return (
        <Search>
  <Form>
    <SearchButton type="submit">
      <SearchLabel >Search</SearchLabel>
    </SearchButton>

    <SearchInput
      type="text"
      autocomplete="off"
      autoFocus
      placeholder="Search images and photos"
    />
  </Form>
</Search>


    )
  };
};

export default Searchbar;