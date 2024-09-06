import React, {useState} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import counterSlice from '../../redux/counterSlice';
const actions = counterSlice.actions;
function CounterRedux() {
    const {count}=useSelector((store)=> store.counterState);
    // console.log(count);

    const dispatch=useDispatch();

    const handleIncrement = () => {
        console.log("increment will happen");
        dispatch(actions.increment());
    }
    
    const handleDecrement = () => {
        console.log("decrement will happen");
        dispatch(actions.decrement());
    }

  return (
    <>
        <button onClick={handleIncrement}>+</button>
        <div>{count}</div>
        <button onClick={handleDecrement}>-</button>
    </>
  )
}

export default CounterRedux