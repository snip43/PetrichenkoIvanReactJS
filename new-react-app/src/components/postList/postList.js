import React from 'react';
import PostListItem from '../postListItem';
import './postList.css';

const PostList = ({ posts }) => {
  const elements = posts.map((item) => {
    const { id, label, important } = item;
    if (typeof item == 'object' && 'label' in item && 'important' in item && 'id' in item) {
      return (
        <li className="list-group-item" key={id}>
          <PostListItem label={label} important={important} />
        </li>
      );
    }
  });

  return <ul className="app-list list-group">{elements}</ul>;
};

export default PostList;
