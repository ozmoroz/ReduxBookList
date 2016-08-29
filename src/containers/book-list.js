import { connect } from 'react-redux';
import React, { Component } from 'react';

class BookList extends Component {
  renderList() {
    return this.props.books.map((book) => (
      <li key={book.title} className="list-group-item">{book.title}</li>
    ));
  }

  render() {
    let list = this.renderList();
    return (
      <ul className = "list-group col-sm-4">
        {this.renderList()}
      </ul>
    )
  }
}

function mapStateToProps(state) {
  // Whatever is retured will show as a this.props inside BookList
  return {
    books: state.books
  };
}

export default connect(mapStateToProps)(BookList);
