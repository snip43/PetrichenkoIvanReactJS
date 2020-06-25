import React from 'react';
import { Button, ButtonGroup } from 'react-bootstrap';

import './postStatusFilter.css';

const PostStatusFilter = () => {
  return (
    <ButtonGroup>
      <Button variant="outline-info">Все</Button>
      <Button variant="outline-info">Понравилось</Button>
    </ButtonGroup>
  );
};

export default PostStatusFilter;
