import React from 'react';

import './postStatusFilter.css';

const PostStatusFilter = () => {
  return (
    <div className="btn-group">
      <button type="button" className="btn btn-outline-primary btn-sm active">
        Все
      </button>
      <button type="button" className="btn btn-outline-primary btn-sm">
        Понравилось
      </button>
    </div>
  );
};

export default PostStatusFilter;
