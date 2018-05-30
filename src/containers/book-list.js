import React, {Component} from 'react';
import { connect } from 'react-redux'; //connect container with component
import { selectBook } from "../actions/index";
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
        

        return(
        <ul className="list-group col-lg-4">
            {this.renderList()}
        </ul>
        );
    }
}

function mapStateToProps(state) {
    //Returns state to props
    return {
        books: state.books
    };
}

//Anything returned from this function will go as props on BookList container
function mapDispatchToProps(dispatch) {
    //when select book is called => result gets passed to the reducer
    return bindActionCreators( { selectBook: selectBook}, dispatch)
}

//Promote Booklist from component to container
export default connect(mapStateToProps, mapDispatchToProps)(BookList);
