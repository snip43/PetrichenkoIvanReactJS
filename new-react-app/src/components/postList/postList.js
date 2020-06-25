import React from 'react';
import PostListItem from '../postListItem';
import './postList.css';
import { ListGroup } from 'react-bootstrap';

const PostList = ({ posts, onDelete, addItem }) => {
  const elements = posts.map((item) => {
    const { id, label, important } = item;
    if (typeof item == 'object' && 'label' in item && 'important' in item && 'id' in item) {
      return (
        <ListGroup.Item key={id}>
          <PostListItem label={label} important={important} onDelete={() => onDelete(id)} />
        </ListGroup.Item>
      );
    }
  });

  return <ListGroup className="app-list">{elements}</ListGroup>;
};

export default PostList;
