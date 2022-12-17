import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Search, Form, SearchButton, SearchLabel, SearchInput} from './Searchbar.styled'
import {ReactComponent as SearchIcon} from '../icons/serch.svg';
import { toast } from 'react-toastify';


class Searchbar extends Component {

      static propTypes = {
        onClick: PropTypes.func,
        children: PropTypes.node,
 };

 deafultProps = {
  onClick: () => null,
  children: null,
}

state = {
  inputValue:'',
};

inputChange = e => {
  this.setState({inputValue: e.currentTarget.value.trim().toLowerCase()});
}

handleSubmit = e => {
  e.preventDefault();
  const {inputValue} = this.state;

  if (inputValue.trim() === ''){
    toast.info('Input search word, please');
    return
  }

  this.props.onSearch(inputValue);
  this.setState({inputValue: ''});
};

render (){

    return (
        <Search>
  <Form onSubmit={this.handleSubmit}>
    <SearchButton type="submit"  aria-label="Find images">{this.props.children}
      <SearchIcon width="24" height="24" fill="#5b5b5b"/>
        <SearchLabel >Search</SearchLabel>
    </SearchButton>

    <SearchInput
      type="text"
      autocomplete="off"
      autoFocus
      placeholder="Search images and photos"
      value={this.state.inputValue}
      onChange={this.inputChange}
    />
  </Form>
</Search>


    )
  };
};

export default Searchbar;