import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import { useState,useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { passDataSliceActions } from '../Redux/Slice/passDataSlice';
const GetTodo=()=>{
    const dispatch=useDispatch()
    const [getTodoArray,setGetTodoArray]=useState([])
    useEffect(()=>{
   const getTodoData=JSON.parse(localStorage.getItem('addTodo'))
   setGetTodoArray(getTodoData)
    },[])

    const deleteTodoHandler=(id)=>{
        console.log('delete id is',id)
        const updatedTodoData=getTodoArray.filter((todo)=>todo.id!==id)
        setGetTodoArray(updatedTodoData)
        localStorage.setItem('addTodo',JSON.stringify(updatedTodoData))
        console.log('update filter todo is',updatedTodoData)
        window.location.reload()

    }
  const updateTodoHandler=(getData)=>{
    console.log('update id is',getData)
  dispatch(passDataSliceActions.passDataObj(getData))

  }
return (
    <>
    <div style={{marginTop:'4rem'}}>
    <TableContainer component={Paper}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Todo Id</TableCell>
            <TableCell align="right">Todo Item</TableCell>
            <TableCell align="right">Update Button</TableCell>
            <TableCell align="right">Delete Button</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {
            getTodoArray.map(getItem=>{
                return (
                    <>
                     <TableRow
              key={getItem.id}
            
            >
              <TableCell component="th" scope="row">
                {getItem.id}
              </TableCell>
              <TableCell align="right">{getItem.addTodo}</TableCell>
              <TableCell align="right"> <Button variant="contained" type='btn' onClick={()=>updateTodoHandler(getItem)}>Update</Button></TableCell>
              <TableCell align="right"><Button variant="contained" type='btn' onClick={()=>deleteTodoHandler(getItem.id)}>Delete</Button></TableCell>
            </TableRow>
                    </>
                )
            })
          }
        </TableBody>
      </Table>
    </TableContainer>
    </div>
    </>
)
}
export default GetTodo