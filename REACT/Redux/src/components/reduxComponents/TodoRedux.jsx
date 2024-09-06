import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import TodoSlice from '../../redux/todoSlice';
const actions = TodoSlice.actions;
function TodoRedux() {
    // const [list,setList] = useState([]);
    const {task, todoList} = useSelector((store)=>{
        return store.todoState;
    })

    // const handleTask = (e)=>{
    //     const task=e.target.parentElement.children[0].value;
    //     setList([...list,task]);
    // }
    const dispatch = useDispatch()

    const handleChange = (e)=>{
        const value = e.target.value;
        dispatch(actions.setValue(value))
    }

    const handleAddTask = ()=>{
        dispatch(actions.addTask(task))
    }

  return (
    <>
        <h2>Todo</h2>
        <div>
            <div className='inputBox'>
                <input type="text" value={task} onChange={handleChange}/>
                <button onClick={handleAddTask}>Add Task</button>
            </div>
            <div className='list'>
                <ul>
                    {todoList.map((task,idx)=>{
                        return ( <li key={idx}>{task}</li> )
                    })}
                </ul>
            </div>
        </div>
    </>
  )
}

export default TodoRedux



// Redux provide a state management solution for our react in short we delegate the whole state management to redux .
// Redux has only one store -> that represents the whole application
// In redux-toolkit -> store is formed by combining multiple slices and those slices indviually represents a particular section of the application
// with useSelector -> you can access the property
// with useDispatch -> you can update the state with the help of reducer functions