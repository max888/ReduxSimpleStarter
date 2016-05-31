import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux';

class BookList extends Component {
  renderList() {
    return this.props.books.map((book) => {
      return (
        <li
          key={book.title}
          onClick={() => this.props.selectBook(book)}
          className="list-group-item">
          {book.title}
        </li>
      );
    });
  }

  render() {
    return (
      <ul className="list-group col-sm-4">
        {this.renderList()}
      </ul>
    )
  }
}

function mapStateToProps(state) {
  // whatever is reurned from shows up as props inside booklist
  return {
    books: state.books
  };
}

// Anythign returned from this function will end up as props on the booklist container
function mapDispatchToProps(dispatch) {
  // whenever selectBook is called, the result should be passed to all our reducers
  return bindActionCreators({ selectBook: selectBook }, dispatch)
}

// promote booklist from a component to a container - ot needs to know about this new dispatch method, selectBook. Make it availavle as a prop
export default connect(mapStateToProps, mapDispatchToProps)(BookList);
