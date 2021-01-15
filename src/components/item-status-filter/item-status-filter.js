import React from 'react';

import './item-status-filter.css';




const ItemStatusFilter = ({done, active, all}) => {

    let classDone = 'btn'
    let classActive = 'btn';
    let classAll = 'btn'

    all ? classAll += ' btn-info': '';
    done.length ? classDone += ' btn-success' : '';
    active.length ? classActive += ' btn-danger': '';


  return (
    <div className="btn-group">
      <button type="button"
              className={classAll}>All</button>
      <button type="button"
              className={classActive}>Active</button>
      <button type="button"
              className={classDone}>Done</button>
    </div>
  );
};

export default ItemStatusFilter;
