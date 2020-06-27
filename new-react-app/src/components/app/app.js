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
        { id: 1, label: 'Hello', important: true, like: true },
        { id: 2, label: 'World', important: false, like: false },
        { id: 3, label: 'Roman', important: false, like: false },
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
      like: false,
      id: this.maxId++,
    };

    this.setState(({ data }) => {
      const newArr = [...data, newElem];
      return {
        data: newArr,
      };
    });
  };

  onToggleImportant = (id) => {
    this.setState(({ data }) => {
      const index = data.findIndex((elem) => elem.id === id);

      const old = data[index];
      const newItem = { ...old, important: !old.important };

      const newArr = [...data.slice(0, index), newItem, ...data.slice(index + 1)];

      return {
        data: newArr,
      };
    });
  };
  onToggleLiked = (id) => {
    this.setState(({ data }) => {
      const index = data.findIndex((elem) => elem.id === id); // находим индекс элемента

      const old = data[index]; //сохранаяем найденный элемент в переменную
      const newItem = { ...old, like: !old.like }; // изменяем  в элементе св-во like

      const newArr = [...data.slice(0, index), newItem, ...data.slice(index + 1)]; // новый стейт

      return {
        data: newArr,
      };
    });
  };

  render() {
    const { data } = this.state;

    const liked = data.filter((item) => item.like).length;
    const allPosts = data.length;
    return (
      <div className="app">
        <AppHeader liked={liked} allPosts={allPosts} />
        <div className="d-flex search-panel">
          <SearchPanel />
          <PostStatusFilter />
        </div>
        <PostList
          posts={data}
          onDelete={this.deleteItem}
          onToggleImportant={this.onToggleImportant}
          onToggleLiked={this.onToggleLiked}
        />
        <PostAddForm addItem={this.addItem} />
      </div>
    );
  }
}
