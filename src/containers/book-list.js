import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { selectBook } from '../actions/index';

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

// Anything returned from this function will end up on props of BookList container
function mapDispatchToProps(dispatch) {
  // Whenever selectBook is called, the result should be passed to all of our reducers
  return bindActionCreators({selectBook: selectBook}, dispatch);
}

// Promote BookList from a component to a container. It needs to know about this new dispatch method,
// selectBook. Make it available as a prop. 
export default connect(mapStateToProps, mapDispatchToProps)(BookList);
