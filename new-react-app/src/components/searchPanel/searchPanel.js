import React from 'react';
import './searchPanel.css';

const SearchPanel = () => {
  const textPlaceholder = 'Поиск по записям';

  return <input type="text" placeholder={textPlaceholder} className="form-control search-input" />;
};

export default SearchPanel;
