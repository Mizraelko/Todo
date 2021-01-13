import React from 'react';
import './item-add-form.css';


const ItemAddForm = ({onItemAdded}) => {
    const itemText = (text) => {


    }

    return (
        <div className='add-form'>
            <button
                className='btn btn-info'
                onClick={() => onItemAdded()}>
                <i className="fa fa-plus-square-o"></i>
            </button>
            <input type="text"
                   className="form-control search-input"
                   placeholder="new Todo"
                   onChange={(e) => itemText(e.target.value)}/>
        </div>
    );
};

export default ItemAddForm;