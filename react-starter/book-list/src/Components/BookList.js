import React, { Component } from 'react';

class BookList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      
    }
  }

  

  render() {
    let mappedBooks = this.props.books.map( (book) =>(
      <div>
        <img width="100px" src={book.img}/>
        <h2>{book.title}</h2>
        <h2>{book.author}</h2>
      </div>
    ));
    return (
      <section>
          {mappedBooks}
      </section>
    );
  }
}

export default BookList;
