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
  addToShelf = () => {
    //should i do an if statment to get the id or a foreach loop to get the id and include that book?
    const { shelf, books } = this.state;
    let chosenBook = books.title
    let newShelfBook = shelf.slice();
    newShelfBook.push({ chosenBook })
  }

  render() {
    return (
      <div className="App">
        <Header />
        <section className="main_content">
          <BookList books={this.state.books} addToShelf={this.state.addToShelf}/>
          <Shelf shelf={this.state.shelf}/>
        </section>
      </div>
    );
  }
}

export default App;
