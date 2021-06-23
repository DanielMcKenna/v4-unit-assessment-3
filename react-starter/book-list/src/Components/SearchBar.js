import React, { Component } from 'react';

class SearchBar extends Component{
  constructor(props){
    super(props);
    this.state = {
      userInput: '',
    }
  }

  handleChange =(e) => {
   
    this.setState({
      userInput: e.target.value
    })
  }

  handleClick = () => {
    this.props.filterBooks(this.state.userInput);
  }

  handleClear = () => {
    this.setState({ userInput: "" });
    this.props.reset();
  }

  render(){
    return(
      <section>
        <input onChange={(e) => this.handleChange(e)} value={this.state.userInput} />
        <button onClick={() => this.handleClick()}>Search</button>
        <button onClick={() => this.handleClear()}>Clear Search</button>
      </section>
    );
  }
}

export default SearchBar;