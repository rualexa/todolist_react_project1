import { useState } from "react";



export default function Todo({item, onUpdate, onDelete}){
    const [isEdit, setIsEdit] = useState(false);
    const [newValue, setNewValue] = useState(item.title);
    
    function handleSubmit(event){
       event.preventDefault();
              
    }

    function handleChange(e){
        const value = e.target.value
        setNewValue(value)
    }

    function handleClick(event){
        event.preventDefault();
        onUpdate(item.id, newValue)
        setIsEdit(false)
    }
    
    function FormEdit(){
        return (
            <form className="todoUpdateForm" onSubmit={(e) => handleSubmit(e)}>
                <input type="text" className="todoInput" onChange={ (e) => handleChange(e)} value={newValue}/>
                <button className="botton" onClick={(e) =>  handleClick(e)}>Update</button>
            </form>
        );
    }

    function TodoElement(){
        return (
            <div className="todoInfo">
                {item.title} 
                <button onClick = {(e) => setIsEdit(true)}>Edit</button>
                <button onClick = {(e) => onDelete(item.id)}>Delete</button>
            </div>
        );
    }

    

    return (<div className="todo"> {isEdit? ( FormEdit() ):( TodoElement() )}</div>)
}