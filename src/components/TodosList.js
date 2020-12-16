import { Divider } from '@material-ui/core';
import React from 'react'
import Todo from './Todo';

const TodoList = ({todos}) => {
    return (
        <ul style={{margin: "0 auto", padding: "0"}}>
            { 
            todos.length > 0 ? todos.map((todo) => <Todo text={todo.text} key={todo.id} completed={todo.completed}/> )
            : <h4>You dont have any todos!</h4> 
            }
        </ul>
    );
}

export default TodoList;