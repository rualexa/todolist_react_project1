
import { useState } from "react";
import Todo from "./todo";

import "./todoapp.css";

export default function TodoApp(){
    const [title, setTitle] = useState("");
    const [todo, setTodo] = useState([]);

    function  handleDelete(id){
        const temp = todo.filter( item => item.id !== id)
        setTodo(temp)
    }

    function handleUpdated(id, value){
        const temp = [...todo]
        const item = temp.find(item => item.id === id)
        item.title = value
        setTodo(temp)
    }    

    function handleChange(event){
        const value = event.target.value;
        setTitle(value)
    }

    function handleSubmit(event){
        event.preventDefault();
        const newTodo = {
            id: crypto.randomUUID(),
            title: title,
            completed: false
        }

        setTodo([...todo, newTodo])

        setTitle("")
    }

    return <div className="todoConteiner">
        <form className="" onSubmit={handleSubmit}>
            <input onChange={handleChange} className="todoInput" value={title}/>
            <input onClick={handleSubmit} type="submit" value="Create todo" className="buttonCreate"/>
        </form>

        <div className="todosConteiner">
            {
            todo.map((item) =>  (
                <Todo key={item.id} item={item} onUpdate={handleUpdated} onDelete={handleDelete}/>
                ))
            }
        </div>
        
    </div>;
}