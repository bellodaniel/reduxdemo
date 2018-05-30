import React from 'react';
import {Component} from 'react';
import BookList from '../containers/book-list';
import BookDetail from '../components/book-detail';

export default class App extends Component {
  render() {
    return (
      <div>
          <h1>Welcome To Redux</h1>
          <BookList />
          <BookDetail/>
      </div>
    );
  }
}
