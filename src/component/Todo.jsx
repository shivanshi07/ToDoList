import React ,{useState} from 'react';
import '../index.css';
import todo from './images/todo.jpeg';
import DeleteIcon from '@material-ui/icons/Delete';
import Item from './Item';

const Todo = () => {
    const [item, setItem] = useState();
    const [listItem, setListItem] = useState([]);

    const addItem = () => {
        if(item){
            setListItem([...listItem,item]);
            setItem('');
        }
    }

    const deleteItem = (id) => {
        setListItem((prev)=>{
            return prev.filter((arr, index)=> {
                return index!= id;
            })
        })
    }
    

    return (
        <div className="main-div">
            <div className="child-div">
                <figure>
                    <img src={todo} alt="todolog" />
                    <figcaption>Add your List here 👇</figcaption>
                </figure>
                <div className="addItems">
                    <input type="text" placeholder="✍Write Here..." value={item}
                         onChange={(event)=>{setItem(event.target.value)}}/>
                    <i className="fa fa-plus add-btn" title="Add item" onClick={addItem}></i>
                </div>

                <div className="showItems">
                    {listItem.map((val,index)=>{
                        return(
                            <Item key={index} val={val} deleteProp={()=>{
                                deleteItem(index);
                            }} />
                        )
                    })}
                </div>

                <div className="showItems ">
                    <button className="btn effect04" data-sm-link-text="Remove All"
                    onClick={()=>{setListItem([])}}><span>CheckList</span></button>
                </div>
                
            </div>
        </div>
    )
}

export default Todo
