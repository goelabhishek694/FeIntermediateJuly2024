let pizaPrice=500; 

function apply60(){
    console.log(`new price -> ${0.4*pizaPrice}`);
}

//2hrs -> apply coupon again


function throttle(fn,delay){
    let flag=true; //you can apply the offer 
    return function(...args){
        if(flag){
            fn(...args);
            console.log("copoun has been applied");
            flag=false;
            setTimeout(()=>{
                flag=true;
            },delay);
        }else{
            console.log("coupon not valid, try again after sometime");
        }
    }
}

const throttledFn=throttle(apply60,5000);
throttledFn();
throttledFn();
throttledFn();
setTimeout(()=>{
    throttledFn()
},6000)


