import React from 'react';

import './item-status-filter.css';




const ItemStatusFilter = ({done, active, all, setClickFilterItems}) => {

    let classDone = 'btn'
    let classActive = 'btn';
    let classAll = 'btn'

    all ? classAll += ' btn-info': '';
    done.length ? classDone += ' btn-success' : '';
    active.length ? classActive += ' btn-danger': '';
    const clickForElement = (e) => {
        setClickFilterItems(e);
    }

  return (
    <div className="btn-group">
      <button type="button"
              className={classAll}
                onClick={() => clickForElement('all')}>All</button>
      <button type="button"
              className={classActive}
                onClick={() => clickForElement('active')}>Active</button>
      <button type="button"
              className={classDone}
                onClick={() => clickForElement('done')}>Done</button>
    </div>
  );
};

export default ItemStatusFilter;
