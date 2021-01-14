import React, {useState} from 'react';
import './item-add-form.css';


const ItemAddForm = ({onItemAdded}) => {
    const [state, setState] = useState('');

    const onLabelChange = (e) => {
        let text = e.target.value
        setState(text)

    };
    const onSubmit = (e) => {
        e.preventDefault();
        onItemAdded(state);
        setState('')
    }

    return (
        <form className='add-form'
            onSubmit={onSubmit}>
            <input type="text"
                   className="form-control"
                   placeholder="what need to be done?"
                   value={state}
                   onChange={onLabelChange}/>
            <button className='btn btn-info'>
                <i className="fa fa-plus-square-o"></i>
            </button>


        </form>
    );
};

export default ItemAddForm;