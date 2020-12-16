import React, { useState } from 'react'

import Container from '@material-ui/core/Container';
import Form from './components/Form';
import TodosList from './components/TodosList';


function App() {

  const [tareas, setTareas] = useState([])


  console.log(tareas)

  return (
      <Container  
        maxWidth="sm"
        style= {{backgroundColor: "white" ,
        borderRadius: "5px",
        marginTop: "10px",
        padding: "0"
      }}>
        <Form tareas={tareas} setTareas={setTareas} />
        <TodosList todos ={tareas}/>
      </Container>
    );
}

export default App;
