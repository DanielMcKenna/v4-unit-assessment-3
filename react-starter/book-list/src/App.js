import './App.css';
import Header from './Components/Header.js';
import Shelf from './Components/Shelf.js';
import React, { Component } from 'react';
import data from './db_schema/data';
import BookList from './Components/BookList';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: data,
      shelf: [],
    }
  }
  addToShelf(){

  }

  render() {
    return (
      <div className="App">
        <Header />
        <section className="main_content">
          <BookList books={this.state.books}/>
          <Shelf />
        </section>
      </div>
    );
  }
}

export default App;
