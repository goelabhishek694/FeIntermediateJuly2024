// hof -> 

// fn is accepted as parameter by another function and/or function is returned by another function 
let bankStatement=[1000,-300,3000,400,-2300];

// 1. print  bankStatement
// for each ele in an array a function is executed 
//for each does not return anything 

function traverse (ele){
    console.log(ele);
    return 10;
}

let ans=bankStatement.forEach(traverse);
console.log(ans);

//2. usd to inr 
// traverse over each ele in an array a function is executed 
//map returns an array 
function usdToInr(ele){
    return ele*85;
}
let bankStatementInr = bankStatement.map(usdToInr);
console.log(bankStatementInr);

function bsInInr(bankStatement){
    let arr=[];
    for(let i=0;i<bankStatement.length;i++){
        let ele=bankStatement[i];
        ele=ele*85;
        arr.push(ele);
    }
    return arr ;
}

function bsInYen(bankStatement){
    let arr=[]; 
    for(let i=0;i<bankStatement.length;i++){
        let ele=bankStatement[i];
        ele=ele*60; //logic 
        arr.push(ele);
    }
    return arr ;
}

// 3. bank statement , i want only the earnings 
//filter out the spendings , u will be left woth earnings
//if the conditon equates to true , then ele is going to be pushed inside a new array . 
function getEarnings(ele){
    return ele > 0
}
// let earningsBankStatement = bankStatement.filter(getEarnings);
// console.log(earningsBankStatement);

// 4. get total earnings/spending
console.log(bankStatement);
// acc -> arr[0], curr-> arr[1]
//acc -> 0, curr -> arr[0] 
function getTotalEarning(acc,curr){
    console.log("acc ->", acc, "curr -> ", curr);
    return acc=acc+curr;
}
// let totalEarning=bankStatement.reduce(getTotalEarning);
// let totalEarning=bankStatement.reduce(getTotalEarning,0);
// console.log(totalEarning);

// <------------------ polyfill for MAP --------------------->

Array.prototype.myMap=function (logic){
    let arr=this;
    let newArr=[];
    for(let i=0;i<arr.length;i++){
        let ele=arr[i];
        let val=logic(ele)
        newArr.push(val);
    }
    return newArr;
};

function usdToInr2(ele){
    // console.log(this);
    return ele*85;
}

let bankStatementInInr = bankStatement.myMap(usdToInr2)
console.log(bankStatementInInr);

// <------------------ polyfill for FILTER --------------------->

Array.prototype.myFilter=function (logic){
    let arr=this;
    let newArr=[];
    for(let i=0;i<arr.length;i++){
        let ele=arr[i];
        let val=logic(ele);
        if(val) newArr.push(ele);
    }
    return newArr;
};

let earningsBankStatement = bankStatement.myFilter(getEarnings);
console.log(earningsBankStatement);

// <------------------ polyfill for REDUCE --------------------->

Array.prototype.myReduce=function(logic, initialValue){
    // let arr=this;
    let acc=initialValue!=undefined ? initialValue : this[0];
    let si=initialValue!=undefined ? 0 : 1;
    for(let i=si;i<this.length;i++){
        let val=logic(acc,this[i]);
        acc=val;
    }
    return acc;
}

let totalEarning=bankStatement.myReduce(getTotalEarning);
console.log(totalEarning);