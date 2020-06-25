import React from 'react';
import './postAddForm.css';

const PostAddForm = ({ myName }) => {
  return (
    <form action="" className="bottom-panel d-flex">
      <input
        type="search"
        placeholder="О чем вы думаете сейчас ? "
        className="form-control new-post-label"
      />
      <button type="submit" className="btn btn-outline-secondary" onClick={myName}>
        Добавить
      </button>
    </form>
  );
};

export default PostAddForm;
