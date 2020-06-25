import React from 'react';
import './app.css';
import AppHeader from '../appHeader';
import PostStatusFilter from '../postStatusFilter';
import SearchPanel from '../searchPanel/searchPanel';
import PostList from '../postList/postList';
import PostAddForm from '../postAddForm/postAddForm';

const App = () => {
  const data = [
    { id: 1, label: 'Hello', important: true },
    { id: 2, label: 'World', important: false },
    { id: 3, label: 'Roman', important: false },
  ];

  return (
    <div className="app">
      <AppHeader />
      <div className="d-flex search-panel">
        <SearchPanel />
        <PostStatusFilter />
      </div>
      <PostList posts={data} />
      <PostAddForm />
    </div>
  );
};

export default App;
