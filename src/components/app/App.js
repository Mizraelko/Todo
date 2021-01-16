import './App.css';
import AppHeader from "../app-header/app-header";
import SearchPanel from "../search-panel/search-panel";
import ItemStatusFilter from "../item-status-filter/item-status-filter";
import React, {useState} from "react";
import TodoList from "../todo-list/todo-list";
import ItemAddForm from "../item-add-form/item-add-form";


function App() {


    const createTodoItem = (label) => {

        return {
            label,
            important: false,
            done: false,
            id: Math.random(),


        }
    }

    const [state, setState] = useState({
        todoData: [
            createTodoItem('dde'),
            createTodoItem('dde2312'),
            createTodoItem('dde333'),

        ],
    });
    const [term, setTerm] = useState('');
    const [clickFilterItems, setClickFilterItems] = useState('')

    const toggleProperty = (arr, id, propertyName) => {
        const idx = arr.findIndex(e => e.id === id);
        const oldItem = arr[idx];
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
        setState(({todoData}) => {

            return {
                todoData: toggleProperty(todoData, id, 'done')
            }
        })
    }
    const onToggleImportant = (id) => {
        setState(({todoData}) => {

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
            return {
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


    const {todoData} = state;

    const searchChange = (text) => {
        setTerm(text);
    }

    const arrSort = (arr, searchString, sortByClick) => {
        if (sortByClick !== false) {
            arr = (function search(filterClicks) {
                switch (filterClicks) {
                    case 'done':
                        return arr.filter((item) => {
                            return item.done;
                        })
                    case 'active':
                        return arr.filter((item) => {
                            return item.important;
                        })
                    default :
                        return arr;
                }
            })(sortByClick);
        }
        if (searchString !== 0) {
            return (function searchItems(arr, searchString) {
                return arr.filter((item) => item.label.toLowerCase().startsWith(searchString.toLowerCase()))

            })(arr, searchString);
        }
        return arr
    }

    console.log(state.todoData)
    const visibleItems = arrSort(todoData, term, clickFilterItems);


    const countItemProperty = (propName, arr = todoData) => {
        return arr.filter(e => e[propName]).length;
    }

    const itemCountStatusFilter = (propName, arr = todoData) => {
        return arr.filter(e => e[propName]);
    }


    return (
        <div className="todo-app">
            <AppHeader toDo={todoData.length - countItemProperty('done')} done={countItemProperty('done')}
                       important={countItemProperty('important')}/>
            <div className="top-panel d-flex">
                <SearchPanel searchChange={searchChange} value={term}/>
                <ItemStatusFilter setClickFilterItems={setClickFilterItems} done={itemCountStatusFilter('done')}
                                  active={itemCountStatusFilter('important')} all={todoData.length}/>
            </div>

            <TodoList todos={visibleItems}
                      onToggleDone={onToggleDone}
                      onToggleImportant={onToggleImportant}
                      onDeleted={onDeleted}/>
            <ItemAddForm onItemAdded={onItemAdded}/>

        </div>
    );
}


export default App;
