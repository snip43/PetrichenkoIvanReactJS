import React from 'react';
import './appHeader.css';

const AppHeader = ({ liked, allPosts }) => {
  return (
    <div className="app-header d-flex justify-content-between">
      <h1>Roman Kostin</h1>
      <h2>
        {allPosts} записи, из них {liked} понравилось
      </h2>
    </div>
  );
};

export default AppHeader;
