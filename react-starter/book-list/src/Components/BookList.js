import React, { Component } from 'react';

class BookList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      
    }
  }

  

  render() {
    let mappedBooks = this.props.books.map( (book) =>(
      <div key={book.id} className="books">
        <img onClick={() => this.props.addToShelf(book)}width="100px" src={book.img}/>
        <p>{book.title}</p>
        <p>{book.author}</p>
      </div>
    ));
    return (
      <section className="book-spacing">
          { mappedBooks }
      </section>
    );
  }
}

export default BookList;
