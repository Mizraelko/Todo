import React, {useState} from 'react';

import './todo-list-item.css';

const TodoListItem = ({ label, setCurrentDone, onDeleted}) => {

  const [done, setDone] = useState(false);
  const [important, setImportant] = useState(false);
  let classNames = "todo-list-item";
  done ? classNames += ' done' : ' done';
  important ? classNames += ' important' : '';

  return (
    <span className={classNames}>
      <span
        className="todo-list-item-label"
        onClick={() => {
            setDone(!done);
            setCurrentDone(!done);
        }}
        >
        {label}
      </span>

      <button type="button"
              className="btn btn-outline-success btn-sm float-right"
              onClick={() => {setImportant(!important)}}>
        <i className="fa fa-exclamation" />
      </button>

      <button type="button"
              className="btn btn-outline-danger btn-sm float-right"
              onClick={onDeleted}  >
        <i className="fa fa-trash-o" />
      </button>
    </span>
  );
};

export default TodoListItem;
