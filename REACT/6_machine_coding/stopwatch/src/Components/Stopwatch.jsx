import React, { useRef, useState, useCallback } from 'react'

function Stopwatch() {
    const [time,setTime] = useState(0);
    const [isRunning,setIsRunning] = useState(false);
    const timerRef = useRef(null);
    const [buttonState,setButtonState] = useState("Start")

    const startTimer = useCallback(() => {
        if(!isRunning){
            setIsRunning(true);
            timerRef.current= setInterval( () => {
                setTime((prevTime)=>prevTime+1)
            },1000)
        }
    },[isRunning])

    const stopTimer = useCallback(() => {
        if(isRunning){
            clearInterval(timerRef.current)
            setIsRunning(false);
            setButtonState("Resume")
        }
    },[isRunning])

    const resetTimer = useCallback(() => {    
        clearInterval(timerRef.current)
        setIsRunning(false);
        setTime(0);
        setButtonState("Start")
    },[])

    const formatTime = (time) => {
        const getSeconds = `0${time%60}`.slice(-2);
        const minutes = Math.floor(time/60);
        const getMinutes = `0${minutes%60}`.slice(-2);
        const getHours = `0${Math.floor(minutes/3600)}`.slice(-2);
        return `${getHours}:${getMinutes}:${getSeconds}`
    }
    
  return (
    <div>
        <h1>{formatTime(time)}</h1>
        <button onClick={startTimer}>{buttonState}</button>
        <button onClick={stopTimer}>Stop</button>
        <button onClick={resetTimer}>Reset</button>
    </div>
  )
}

export default Stopwatch