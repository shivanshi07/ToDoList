import React ,{useState} from 'react';
import '../index.css';
import todo from './images/todo.jpeg';
import DeleteIcon from '@material-ui/icons/Delete';
import Item from './Item';

const Todo = () => {
    const [item, setItem] = useState("");
    const [listItem, setListItem] = useState([]);
    const [toggleSubmit, setToggleSubmit]= useState(false);
    const [isEditItem, setIsEditItem] = useState(null);

    const addItem = () => {
        if(item && toggleSubmit){
            setListItem(
                listItem.map((elem)=>{
                    if(elem.id === isEditItem){
                        return { ...elem, name: item};
                    }
                })
            );
            setItem('');
            setToggleSubmit(false);
        }
        else if(item){
            const allInputData = {id : new Date().getTime().toString(), name : item};
            setListItem([...listItem,allInputData]);
            setItem('');
        }
    }

    const deleteItem = (id) => {
        setListItem((prev)=>{
            return prev.filter((arr)=> {
                return id != arr.id ;
            })
        })
    }

    const editItem = (id) => {
        let newItemDate = listItem.find((elem)=>{
            return elem.id === id;
        })
        setItem(newItemDate.name);
        setToggleSubmit(true);
        setIsEditItem(id);
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
                    {toggleSubmit ? <i className="fa fa-edit" title="Edit Item" onClick={addItem}></i> :
                                <i className="fa fa-plus add-btn" title="Add item" onClick={addItem}></i>}
                </div>

                <div className="showItems">
                    {listItem.map((val)=>{
                        return(
                            <div className="eachItem" key={val.id}>
                                <h3>{val.name}</h3>
                                <div className="todo-btn">
                                    <i className="fa fa-edit" title="Edit Item" onClick={()=>editItem(val.id)}></i>
                                    <i className="fa fa-trash-o fa-lg" title="Delete Item" onClick={()=>deleteItem(val.id)}></i>
                                </div>
                            </div>
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
