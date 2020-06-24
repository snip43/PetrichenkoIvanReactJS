import React from 'react';
import './app.css';
import AppHeader from '../appHeader';
import PostStatusFilter from '../postStatusFilter';
import SearchPanel from '../searchPanel/searchPanel';
import PostList from '../postList/postList';
import PostAddForm from '../postAddForm/postAddForm';

const App = () => {
  return (
    <div className="app">
      <AppHeader />
      <div className="d-flex search-panel">
        <SearchPanel />
        <PostStatusFilter />
      </div>
      <PostList />
      <PostAddForm />
    </div>
  );
};

export default App;
