import React from 'react'
import './Todo.css';


const Todo = ({text, id, completed}) => {
    return (
        <li  className="lista-tareas__tarea">  
            <span className= "lista-tareas__icono"> { completed ? "✅" : "❎"}</span>
            <div className="lista-tareas__texto">
                {text}
            </div> 
        </li>
    )
}

export default Todo