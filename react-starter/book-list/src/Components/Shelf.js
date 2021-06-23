import React, { Component } from 'react';

class Shelf extends Component {
  constructor(props) {
    super(props);
    this.state = {
      
    }
  }

  render() {
    let mappedTitles = this.props.shelf.map(
      (bookTitle, i) =>(
        <div key={bookTitle.id}>
          <p>{bookTitle.title}</p>
        </div>
      )
    );
    return (
      <section className="shelf">
        <h1>Shelf</h1>
          { mappedTitles }
          <button onClick={ () => this.props.clearShelf() }>Clear shelf</button>
      </section>
    );
  }
}

export default Shelf;