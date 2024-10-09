import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';
import { useSelector } from 'react-redux';
const AddTodo = () => {
    const [addTodo, setAddTodo] = useState('')
    const updateTodo=useSelector((state)=>state.passData.passDataSliceObj)
    console.log('update todo data',updateTodo)
    const addTodoHandler = (event) => {
        setAddTodo(event.target.value)
    }
   
    const todoSubmitHandler = (e) => {
        e.preventDefault()
      let  existingTodos=JSON.parse(localStorage.getItem('addTodo')) || []
      if(updateTodo.addTodo){
       existingTodos= existingTodos.map(todo=>todo.id===updateTodo.id?{...todo,addTodo:addTodo}:todo)
        console.log('todo updated',existingTodos)
      }
      else{
        let x = Math.floor((Math.random() * 10) + 1);

        const newTodo = {
            id: x,
            addTodo: addTodo
        }
        existingTodos=[...existingTodos,newTodo]
        console.log('new todo added',existingTodos)
      }
      localStorage.setItem('addTodo',JSON.stringify(existingTodos))
        setAddTodo('')
        window.location.reload()
    }

    return (
        <>
        <div style={{display:"flex",justifyContent:'center'}}>
            <p style={{fontSize:"2rem",marginTop:"2rem",fontWeight:'bold'}}>Todo List</p>
        </div>
            <div>
                <form onSubmit={todoSubmitHandler}>
                    <div style={{ display: 'flex', justifyContent: 'center', marginTop: '2rem' }}>
                        <Box
                            component="form"
                            sx={{ '& > :not(style)': { m: 1, width: '50ch' } }}
                            noValidate
                            autoComplete="off"
                        >
                            <TextField id="outlined-basic" label={`${updateTodo.addTodo?updateTodo.addTodo:'Enter your Task'}`} variant="outlined" onChange={addTodoHandler} value={addTodo || updateTodo.addTodo} />
                        </Box>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'center', marginTop: "2rem" }}>
                        <Button variant="contained" type='submit' style={{ width: '12rem' }}>Add Todo</Button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default AddTodo;
