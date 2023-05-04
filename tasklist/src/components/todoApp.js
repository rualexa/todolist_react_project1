
import { useState } from "react";
import Todo from "./todo";



export default function TodoApp(){
    const [title, setTitle] = useState("HOLA");
    const [todo, setTodo] = useState([]);

    

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
    }

    return <div className="todoConteiner">
        <form className="todoCreateForm" onSubmit={handleSubmit}>
            <input onChange={handleChange} className="todoInput" value={title}/>
            <input onClick={handleSubmit} type="submit" value="Create todo" className="buttonCreate"/>
        </form>

        <div className="todosConteiner">
            {
            todo.map((item) =>  (
                <Todo key={item.id} item={item}/>
                ))
            }
        </div>
        
    </div>;
}