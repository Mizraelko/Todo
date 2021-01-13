import './App.css';
import AppHeader from "../app-header/app-header";
import SearchPanel from "../search-panel/search-panel";
import ItemStatusFilter from "../item-status-filter/item-status-filter";
import React, {useState} from "react";
import TodoList from "../todo-list/todo-list";
import ItemAddForm from "../item-add-form/item-add-form";


function App() {


    const [state, setState] = useState( {
        todoData:[]
    })

    const [maxId, setMaxId] = useState(100)

    const createTodoItem = (label) => {
        return {
            label,
            important: false,
            id : maxId,
            done: false

        }
    }

    const onToggleDone = (id) => {
        setState(({ todoData}) => {
            return {
                ...todoData
            }
        })
    }
    const onToggleImportant = (id) => {

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

        setMaxId(maxId + 1)
        const newItem = createTodoItem(text)

        setState(({todoData}) => {
            return {
                todoData: [...todoData, newItem]
            }

        })
    }


    return (
        <div className="todo-app">
            <AppHeader toDo={state.todoData.length}  />
            <div className="top-panel d-flex">
                <SearchPanel />
                <ItemStatusFilter />
            </div>

            <TodoList todos={state.todoData}
                      onToggleDone={onToggleDone}
                      onToggleImportant = {onToggleImportant}
                      onDeleted={onDeleted} />
            <ItemAddForm onItemAdded={onItemAdded}/>

        </div>
    );
}



export default App;
