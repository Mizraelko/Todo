import './App.css';
import AppHeader from "../app-header/app-header";
import SearchPanel from "../search-panel/search-panel";
import ItemStatusFilter from "../item-status-filter/item-status-filter";
import React, {useState} from "react";
import TodoList from "../todo-list/todo-list";
import ItemAddForm from "../item-add-form/item-add-form";
import TodoListItem from "../todo-list-item/todo-list-item";


function App() {


    const createTodoItem = (label) => {

        return {
            label,
            important: false,
            done: false,
            id : Math.random(),


        }
    }

    const [state, setState] = useState( {
        todoData:[
            createTodoItem('dde' ),
            createTodoItem('dde2312' ),
            createTodoItem('dde333' ),

        ]
    })

    const toggleProperty = (arr, id, propertyName) => {
        const idx = arr.findIndex(e => e.id === id);
        const oldItem =arr[idx];
        const newItem = {
            ...oldItem,
            [propertyName]: !oldItem[propertyName]
        }
        return [
            ...arr.slice(0, idx),
            newItem,
            ...arr.slice(idx + 1)
        ]


    }


    const onToggleDone = (id) => {
        setState(({ todoData}) => {

            return {
                todoData: toggleProperty(todoData, id, 'done')
            }
        })
    }
    const onToggleImportant = (id) => {
        setState(({ todoData}) => {

            return {
                todoData: toggleProperty(todoData, id, 'important')
            }
        })
    }
    const onDeleted = (id) => {
        setState(({todoData}) => {
            const idx = todoData.findIndex(e => e.id === id)

            const newArray = [
                ...todoData.slice(0, idx),
                ...todoData.slice(idx + 1)
            ]
            return  {
                todoData: newArray
            }
        })
    }
    const onItemAdded = (text) => {


        const newItem = createTodoItem(text);


        setState(({todoData}) => {
            return {
                todoData: [...todoData, newItem]
            }

        })
    }




    const { todoData } = state;

    const countItemProperty = (arr, propName) => {
        return arr.filter(e => e[propName]).length;
    }



    return (
        <div className="todo-app">
            <AppHeader toDo={todoData.length - countItemProperty(todoData, 'done')} done={countItemProperty(todoData, 'done')} important={countItemProperty(todoData, 'important')} />
            <div className="top-panel d-flex">
                <SearchPanel />
                <ItemStatusFilter done={todoData.filter(e => e.done)} active={todoData.filter(e => e.important)} all={todoData.length} />
            </div>

            <TodoList todos={todoData}
                      onToggleDone={onToggleDone}
                      onToggleImportant = {onToggleImportant}
                      onDeleted={onDeleted}/>
            <ItemAddForm onItemAdded={onItemAdded} />

        </div>
    );
}



export default App;
