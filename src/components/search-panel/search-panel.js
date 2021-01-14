import React from 'react';

import './search-panel.css';

const SearchPanel = ({ searchItem }) => {

  const searchText = (e) => {
    e.preventDefault();
    searchItem(e.target.value);

  }

  return (
    <input type="text"
              onChange={searchText}
              className="form-control search-input"
              placeholder="type to search" />
  );
};

export default SearchPanel;
