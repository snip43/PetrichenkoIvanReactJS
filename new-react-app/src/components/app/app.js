import React, { Component } from 'react';
import './app.css';
import AppHeader from '../appHeader';
import PostStatusFilter from '../postStatusFilter';
import SearchPanel from '../searchPanel/searchPanel';
import PostList from '../postList/postList';
import PostAddForm from '../postAddForm/postAddForm';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        { id: 1, label: 'Hello', important: true },
        { id: 2, label: 'World', important: false },
        { id: 3, label: 'Roman', important: false },
      ],
    };
    this.maxId = 4;
  }

  deleteItem = (id) => {
    this.setState(({ data }) => {
      const index = data.findIndex((elem) => elem.id === id);
      const newArr = [...data.slice(0, index), ...data.slice(index + 1)];
      return {
        data: newArr,
      };
    });
  };

  addItem = (body) => {
    const newElem = {
      label: body,
      important: false,
      id: this.maxId++,
    };

    this.setState(({ data }) => {
      const newArr = [...data, newElem];
      return {
        data: newArr,
      };
    });
  };

  render() {
    const { data } = this.state;
    return (
      <div className="app">
        <AppHeader />
        <div className="d-flex search-panel">
          <SearchPanel />
          <PostStatusFilter />
        </div>
        <PostList posts={data} onDelete={this.deleteItem} />
        <PostAddForm addItem={this.addItem} />
      </div>
    );
  }
}
