import React from 'react';
import './item-add-form.css';

const ItemAddForm = ({onItemAdded}) => {

    return (
        <div className='add-form'>
            <button
                className='btn btn-info'
                onClick={() => onItemAdded()}>
                <i className="fa fa-plus-square-o"></i>
            </button>
        </div>
    );
};

export default ItemAddForm;