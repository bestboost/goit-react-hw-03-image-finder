import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Search, Form, SearchButton, SearchLabel, SearchInput} from './Searchbar.styled'
import {ReactComponent as SearchIcon} from '../icons/serch.svg';

class Searchbar extends Component {

      static propTypes = {
        // onClick: PropTypes.func,
        children: PropTypes.node,
      //  .isRequired
 };

 deafultProps = {
  onClick: () => null,
  children: null,
}

render (){

    return (
        <Search>
  <Form>
    <SearchButton type="submit" >{this.props.children}
      <SearchIcon width="24" height="24" fill="#5b5b5b"/>
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