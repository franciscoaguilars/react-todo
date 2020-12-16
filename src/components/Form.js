import React, { useState } from 'react'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';


const Form = ({tareas, setTareas}) =>{

    const [input, setInput] = useState('')

    const handleOnChange = (e) => {
        setInput(e.target.value);
    }

    const handleOnSubmit= (e) => {
        e.preventDefault();
        if (input === ''){
            alert("This field can't be blank :C")
        }else {
            setTareas([
                ...tareas,
                {
                    id: tareas.length + 1,
                    text:input,
                    completed: false
                }
            ])
            
            setInput('');
        }
    }

    
    return (
        <form autoComplete="off" onSubmit={handleOnSubmit} style={{marginLeft: "10px" }}>
            <TextField id="standard-basic" label="Add a new Todo 💬" 
                style={{width: "100%", margin: "10px 0"}}
                type="text"
                value={input}
                onChange={handleOnChange}
            />
            <Button 
                color="primary" 
                style={{marginBottom:"10px"}}
                type="submit"
                > 
                    Add ✍
            </Button>
        </form >
    ); 
}

export default Form;