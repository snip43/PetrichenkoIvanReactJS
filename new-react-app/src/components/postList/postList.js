import React from 'react';
import PostListItem from '../postListItem';
import './postList.css';

const PostList = ({ posts }) => {
  const elements = posts.map((item) => {
    return (
      <li className="list-group-item" key={item.id}>
        <PostListItem label={item.label} important={item.important} />
      </li>
    );
  });

  return <ul className="app-list list-group">{elements}</ul>;
};

export default PostList;
