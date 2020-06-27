import React from 'react';
import PostListItem from '../postListItem';
import './postList.css';
import { ListGroup } from 'react-bootstrap';

const PostList = ({ posts, onDelete, onToggleImportant, onToggleLiked }) => {
  const elements = posts.map((item) => {
    const { id, label, important, like } = item;
    if (typeof item == 'object' && 'label' in item && 'important' in item && 'id' in item) {
      return (
        <ListGroup.Item key={id}>
          <PostListItem
            label={label}
            important={important}
            like={like}
            onDelete={() => onDelete(id)}
            onToggleImportant={() => onToggleImportant(id)}
            onToggleLiked={() => onToggleLiked(id)}
          />
        </ListGroup.Item>
      );
    }
  });

  return <ListGroup className="app-list">{elements}</ListGroup>;
};

export default PostList;
