import React from 'react';
import DeleteIcon from '@material-ui/icons/Delete';
import './css/item.css';

const Item = (props) => {
    
    const deleteItem = () => {
        props.deleteProp(props.id)
    }
    return (
        <div className="eachItem">
            <h3>{props.val}</h3>
            <DeleteIcon class="deleteIcon" onClick={deleteItem}/>
            {/* <i class="far fa-trash-alt"></i> */}
        </div>
    )
}

export default Item
