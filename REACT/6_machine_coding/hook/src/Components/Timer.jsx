import React, { useEffect, useRef, useState } from 'react'

function Timer() {
    const [seconds,setSeconds] = useState(0);
    //shoudl persist across re-renders. example if seconds state is changed , it's value should persist across re-render . Also if this ref is updated , it should not cause re-render. 
    const intervalRef = useRef(null);
    // let timerId=null;

    useEffect(()=>{
        console.log("i am called");
        
        intervalRef.current = setInterval(()=>{
            setSeconds((prevSeconds)=>prevSeconds+1)
        },1000)

        return () => {
            clearInterval(intervalRef.current)
        };
    },[])

  return (
    <div>
        <p>Seconds : {seconds}</p>
        <button onClick={()=>clearInterval(intervalRef.current)}>Stop Timer</button>
    </div>
  )
}

export default Timer