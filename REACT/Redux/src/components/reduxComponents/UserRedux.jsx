import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchUserMiddleware } from './userMiddleware';
import UserSlice from '../../redux/userSlice';
const actions = UserSlice.actions;
function UserRedux() {
    // const [user, setUser] = useState(null);
    // const [error, setError] = useState(false);
    // const [loading, setLoading] = useState(true);

    // useEffect(()=>{
    //     async function getUser(){
    //         try{
    //             setLoading(true);
    //             const resp = await fetch ("https://jsonplaceholder.typicode.com/users/1");
    //             const user = await resp.json();
    //             console.log(user);
    //             setUser(user);
    //         }
    //         catch(err){
    //             setError(err);
    //         }
    //         finally{
    //             setLoading(false);
    //         }
    //     }
    //     getUser()
    // },[])
    const [value,setValue] = useState(1);
    const {user, error , loading , param} = useSelector((store)=>store.userState)

    const dispatch = useDispatch();

    useEffect(()=>{
        if(param!=null){
            dispatch(fetchUserMiddleware(param))
        }
    },[param])

    const handleParam = ()=>{
        dispatch(actions.getParam(value))
    }

    if(loading){
        return <>
        <h2>User Data</h2>
        <input type='text' value={value} onChange={(e)=>setValue(e.target.value)}/>
        <button onClick={handleParam}>Get User</button>
        <h3>....Loading</h3></>
    }

    if(error){
        return <>
        <h3>Error occured {error}</h3></>
    }
  return (
    <div>
        <h4>Name : {user.name}</h4>
        <h4>Phone : {user.phone}</h4>
    </div>
  )
}

export default UserRedux