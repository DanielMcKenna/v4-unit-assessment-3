import React, { Component } from 'react';

class SearchBar extends Component{
  constructor(props){
    super(props);
    this.state = {
      userInput: '',
    }
  }

  render(){
    return(
      <section>
        <input />
        <button>Search</button>
        <button>Clear Search</button>
      </section>
    );
  }
}

export default SearchBar;