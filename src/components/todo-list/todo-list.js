import React from 'react';

import './todo-list.css';
import TodoListItem from "../todo-list-item/todo-list-item";
import FlipMove from "react-flip-move";


const TodoList = ({todos, onToggleDone, onToggleImportant, onDeleted}) => {



    const elements = todos.map((item) => {
        const {id, ...itemProps} = item;

        return (
            <li key={id} className="list-group-item">

                <TodoListItem {...itemProps} onToggleDone={() => onToggleDone(id)} onToggleImportant={()=> onToggleImportant(id)}  onDeleted={() => {
                    onDeleted(id)
                }}/>
            </li>

        );
    });


    return (

        <ul className="list-group todo-list">
            <FlipMove duration={700} easing='ease'>
               {elements}
            </FlipMove>
        </ul>

    );
};

export default TodoList;
