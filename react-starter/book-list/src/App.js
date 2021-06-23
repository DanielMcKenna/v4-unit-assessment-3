import './App.css';
import Header from './Components/Header.js';
import Shelf from './Components/Shelf.js';
import React, { Component } from 'react';
import data from './db_schema/data';
import BookList from './Components/BookList';
import SearchBar from './Components/SearchBar';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: data,
      shelf: [],
    }
  }
  addToShelf = (book) => {
    const { shelf  } = this.state;
    const { id, title } = book;
    //I need to come back here later and write a conditon if the id already exisits dont add the book maybe a nested for loop?
    this.setState({ shelf: [...shelf, {title, id} ]}, ()=>{
      console.log(this.state.shelf);
    });
  }

  clearShelf = () => {
    this.setState({ shelf: []});
  }

  filterBooks = (input) => {
    const { books } = this.state;
    let filteredBooks = books.filter(book => 
      console.log(book) || 
      book.title.toLowerCase().includes(input.toLowerCase())  || 
      book.author.toLowerCase().includes(input.toLowerCase()));

    this.setState({ books: filteredBooks});

    console.log(input);
  }

  reset = () => {
    this.setState({ books: data });
  }

  render() {
    return (
      <div className="App">
        <Header />
        <SearchBar filterBooks={this.filterBooks} reset={this.reset}/>
        <section className="main_content">
          <BookList books={this.state.books} addToShelf={this.addToShelf}/>
          <Shelf shelf={this.state.shelf} clearShelf={this.clearShelf}/>
        </section>
      </div>
    );
  }
}

export default App;
