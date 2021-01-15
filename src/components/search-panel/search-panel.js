import React, {useState} from 'react';

import './search-panel.css';

const SearchPanel = ({ searchChange, value }) => {



  const onSearchChange = (e) => {
    e.preventDefault();
    let text = e.target.value
    searchChange(text);
  }

  return (
    <input type="text"
              onChange={onSearchChange}
              value={value}
              className="form-control search-input"
              placeholder="type to search" />
  );
};

export default SearchPanel;
