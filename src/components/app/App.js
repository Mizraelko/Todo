import './App.css';
import AppHeader from "../app-header/app-header";
import SearchPanel from "../search-panel/search-panel";
import ItemStatusFilter from "../item-status-filter/item-status-filter";
import React, {useState} from "react";
import TodoList from "../todo-list/todo-list";
import ItemAddForm from "../item-add-form/item-add-form";


function App() {


    const [state, setState] = useState( {
        todoData:[
            { label: 'Drink Coffee', important: false, id: 1 },
            { label: 'Make Awesome App', important: true, id: 2 },
            { label: 'Have a lunch', important: false, id: 3 }
        ]})
    const [doneTodo, setDoneTodo] = useState(0);
    const [maxId, setMaxId] = useState(100)


    const setCurrentDone = (done) => {
        done ? setDoneTodo(doneTodo + 1) : setDoneTodo(doneTodo - 1);

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
        const newItem = {
            label: text,
            important: false,
            id : maxId

        }
        setState(({todoData}) => {
            return {
                ...state,
                todoData: [...todoData, newItem]
            }

        })
    }
    console.log(state.todoData)

    return (
        <div className="todo-app">
            <AppHeader toDo={state.todoData.length} done={doneTodo} />
            <div className="top-panel d-flex">
                <SearchPanel />
                <ItemStatusFilter />
            </div>

            <TodoList todos={state.todoData}
                      setCurrentDone={setCurrentDone}
                      onDeleted={onDeleted} />
            <ItemAddForm onItemAdded={onItemAdded}/>

        </div>
    );
}



export default App;
