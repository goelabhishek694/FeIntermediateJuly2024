const timerInput=document.querySelector(".timer_inputs");
const btns=document.querySelector(".container_btn");
timerInput.addEventListener("input",handleInput);
btns.addEventListener("click",handleClick);

let hrs,min,sec;
let timeLeftInSec;

function handleInput(e){
    const inputEle = e.target;
    const inputType=inputEle.getAttribute("id");
    console.log(inputEle.value);
    if(inputEle.value<0) {
        alert("please add a positive value");
        inputEle.value="00";
    }
    switch(inputType){
        case "hr":
            hrs=inputEle.value.slice(0,2);
            inputEle.value=hrs;
            break;
        case "min":
            min=inputEle.value.slice(0,2);
            inputEle.value=min;
            break;
        case "sec":
            sec=inputEle.value.slice(0,2);
            inputEle.value=sec;
            break;
        
    }
}

function handleClick(e){
    let btnType=e.target.getAttribute("id");
    switch(btnType){
        case "start":
            handleStart()
            break;
        case "pause":
            handlePause()
            break;
        case "continue":
            handleContinue()
            break;
        case "reset":
            handleReset()
            break;
    }
}

function handleStart(){
    // 1:34:45-> into seconds -> setInterval -> 1sec -> we deduct 1 sec fro m total numberof seconds 
    // we display the left seconds in input box 
    let totalTimeInSecs=(hrs?hrs*3600:0)+(min?min*60:0)+(sec?sec*1:0);
    console.log(totalTimeInSecs);
    startTimer(totalTimeInSecs);
}

function startTimer(totalTimeInSecs){
    if(totalTimeInSecs==0) return;
    display(totalTimeInSecs);
    let timerId=setInterval(()=>{
        //start deducting 1 each sec
        timeLeftInSec = --totalTimeInSecs;
        display(timeLeftInSec);
        if(timeLeftInSec==0){
            alert("timer completed");
            clearInterval(timerId)
        }
    },1000)
}

function display(timeInSecs){
    let hrs=parseInt(timeInSecs/3600);
    timeInSecs=timeInSecs%3600;
    let mins=parseInt(timeInSecs/60);
    let secs=timeInSecs%60;
    console.log(hrs,mins,secs);

}