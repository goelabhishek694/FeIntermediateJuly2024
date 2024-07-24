// we have 3 files f1,f2,f3, we want to read them serially but async ccode . 
// const fs=require("fs");
// console.log("before");
// fs.readFile("./f1.txt",function(err,data){
//     if(err){
//         console.log(err);
//     }else{
//         console.log(data+"");
//         fs.readFile("./f2.txt",function(err,data){
//             if(err){
//                 console.log(err);
//             }else{
//                 console.log(data+"");
//                 fs.readFile("./f3.txt",function(err,data){
//                     if(err){
//                         console.log(err);
//                     }else{
//                         console.log(data+"");
                        
//                     }
//                 })
                
//             }
//         })
//     }
// })
// console.log("After");


// we have 3 files f1,f2,f3, we want to read them serially but async ccode . 
// const fs=require("fs");
// console.log("before");
// fs.readFile("./f1.txt",f1cb);

// function f1cb (err,data){
//     if(err){
//         console.log(err);
//     }else{
//         console.log(data+"");
//         fs.readFile("./f2.txt",f2cb)
//     }
// }
// function f2cb(err,data){
//     if(err){
//         console.log(err);
//     }else{
//         console.log(data+"");
//         fs.readFile("./f3.txt",f3cb)
//     }
// }
// function f3cb(err,data){
//     if(err){
//         console.log(err);
//     }else{
//         console.log(data+"");
        
//     }
// }

// console.log("After");

//IOC 

// a person has 100 in his bank a/c , he wants to buy a tv of 20 inr 
// runMlAlgo fn of lib . in runMlAlgo we are passing the amount and cb -> our amount woukd be deducted from bank 

// const {runAlgo} =require("./lib");

// console.log("Before");
// let amount=100;
// let priceOfTv=20;
// //after adding to cart
// runAlgo(amount,cb)
// function cb(){
//     amount=amount - priceOfTv;
//     console.log("Amount",amount);
// }

// console.log("After");

// inversion of control : we send our cb function to an async fn and then that async fn has control to call it 

// due to above 2 issues , cb based fn are not prefered to be used 


// PROMISES

//promise is an object 

// const fs=require("fs");
// console.log("Before");
// //we have converted readFile function from cb to promise based , in proimise there are no cb ;
// const promiseToReadFileContent=fs.promises.readFile("./f1.txt");
// console.log("After");
// console.log(promiseToReadFileContent);
// setTimeout(() => {
//     console.log(promiseToReadFileContent+"");
// }, 1000);

//consume a promise -> then catch 

// const fs=require("fs");
// console.log("Before");
// //we have converted readFile function from cb to promise based , in proimise there are no cb ;
// const promiseToReadFileContent=fs.promises.readFile("./f1.txt");

// const promiseToReadFileContentF3=fs.promises.readFile("./f3.txt");
// console.log("After");
// promiseToReadFileContent.then(function(data){
//     console.log("promise is fulfilled");
//     console.log("file content -> ",data+"");
// })
// promiseToReadFileContent.catch(function(err){
//     console.log("promise is rejected");
//     console.log("Error ",err.message);
// })

// promiseToReadFileContentF2.then(function(data){
//     console.log("promise is fulfilled");
//     console.log("file content -> ",data+"");
// })
// promiseToReadFileContentF2.catch(function(err){
//     console.log("promise is rejected");
//     console.log("Error ",err.message);
// })

// promiseToReadFileContentF3.then(function(data){
//     console.log("promise is fulfilled");
//     console.log("file content -> ",data+"");
// })
// promiseToReadFileContentF3.catch(function(err){
//     console.log("promise is rejected");
//     console.log("Error ",err.message);
// })

// chaining of promises 
//async serial 
// const promiseToReadFileContentF1=fs.promises.readFile("./f1.txt");
// promiseToReadFileContentF1.then(function(data){
//     console.log("promise is fulfilled");
//     console.log("file content -> ",data+"");
//     const p2=fs.promises.readFile("./f2.txt");
//     p2.then(function(data){
//         console.log("promise p2 is fulfilled");
//         console.log("file content -> ",data+"");
//         const p3=fs.promises.readFile("./f3.txt");
//         p3.then(function(data){
//             console.log("promise p2 is fulfilled");
//             console.log("file content -> ",data+"");
//         })
//     })
// })

//we are douing nesting again , so there must be a better way to avoid it 

// console.log("before");
// const p1=fs.promises.readFile("./f11.txt");
// p1.then((data)=>{
//     console.log(data+"");
//     const p2=fs.promises.readFile("./f22.txt");
//     return p2;
// }).then((data)=>{
//     console.log(data+"");
//     const p3=fs.promises.readFile("./f3.txt");
//     return p3;
// })
// .then((data)=>{
//     console.log(data+"");
//     return 25
// })
// .then((num)=>{
//     console.log(num);
// })
// .catch(err=>{
//     console.log(err.message);
// })
// let p2=p1.then();
// p2.then 

// .then consumer is executed only when a promise is settled .  
//whenever something is returned from .then -> it is automatically converted into a promise , this o/p becomes i/p for the next chained .then 


// const p1=fs.promises.readFile("./f11.txt");
// p1.then(function (data){
//     console.log(data+"");
//     const p2=fs.promises.readFile("./f2.txt");
//     return p2;
// },function (err){ 
//     console.log(err)
// }).then((data)=>{
//         console.log(data+""); //ud
//         const p3=fs.promises.readFile("./f3.txt");
//         return p3;
//     })
//     .then((data)=>{
//         console.log(data+""); //f3 data 
//         return 25
//     })
//     .then((num)=>{
//         console.log(num); //25
//         return 20;
//     })
//     .catch(err=>{
//         console.log("in catch , promise is rejected");
//         console.log(err.message);
//         // return fs.promises.readFile("./f3.txt");
//     })
//     .then((data)=>{
//         console.log("after catch");
//         console.log(data)
//     }).catch(err=>{console.log(err);})

//takeways 
// 1. when we chain catch at the end, if any of the promise is rejected above , then all the promises below that promise do not execute . 
// 2. if we handle rejection of a promise within .then . promises below this promise would still be executed normally 
// 3. catch returns a promise 
// 4. after catch .then works . 



// analogy to decide if we put catch at the end , or handle rejection pf prmoises within .then 

// burger buns 
// fry patty 
// chop veggies , i can handle this failure independently in .then 
// assemble patty vegies into bun 
// serve 



// ----------> Promisifying <------------

// let fs=require("fs");
// console.log("Before");
// const promise=promReadFile("./f1.txt");
// console.log(promise);
// promise.then((data)=>{
//     console.log(promise);
//     console.log(data+"");
// }).catch(err=>console.log(err))


// //promisfy our fs.readFile 

// function promReadFile(filePath){
//     //1. return a promise 
//     return new Promise((resolve,reject)=>{
//         // a new promise function is called , function passed to new Promise is called as executor function. this executor functionis called automatically. 
//         //this executor function contains 2 arg resolve and reject 
//         //when executor obtains a result , then we should call one of the callbacks 
//         fs.readFile(filePath,function(err,data){
//             console.log(resolve);
//             console.log(reject);
//             if(err){
//                 reject(err)
//             }else{
//                 resolve(data)
//             }
//         })
//     })
// }

// run algo funcciotn cb-> promise 


// const {runAlgo} =require("./lib");

// console.log("Before");
// let amount=100;
// let priceOfTv=20;
// //after adding to cart
// let p=runAlgo()
// p.then((data)=>{
//     console.log(data);
//     function cb(){
//         amount=amount - priceOfTv;
//         console.log("Amount",amount);
//     }
//     cb()
// }).catch(err=>console.log(err))


// console.log("After");



// O/P based IQ 

// let fs = require("fs");
// let promise = fs.promises.readFile("f1.txt");

// promise.then(function(data) {
//     console.log("Hi, the data is:", data);
// });

// promise.then(function(data) {
//     console.log("Buffer format is:", data);
// });

// promise.then(function() {
//     console.log("I am not accepting");
// });


// let fs = require("fs");
// let promise = fs.promises.readFile("f11.txt");

// promise.catch(function(err) {
//     console.log("err is 1:", err);
// });

// promise.catch(function(err) {
//     console.log("err is 2:", err);
// });

// promise.catch(function(err) {
//     console.log("I am not accepting");
// });

//finally method is used to attach cb to execute them , regardless of wether the promises is resolved or rejeted. it is commonly used to perform cleanup and finalization of actions. 
// finally cb will be executed in order they are defined. order will not chnage regardless of wether the promise is resolved or rejcted. 
//finally does not acept arg in it's cb function 

// let fs = require("fs");
// let promise = fs.promises.readFile("f1.txt");

// promise.finally(function(data) {
//     // console.log("err is 1", err);
//     console.log("data",data);
// });

// promise.finally(function(err) {
//     console.log("err is 2", err);
// });

// promise.finally(function() {
//     console.log("I am not accepting");
//     console.log("Second line of finally");
// });

// Promise. resolve means the promise is going to be reoslved with value 100 (here).

// Promise.resolve(100)
//     .catch((err) => {
//         console.log("err", err);
//     })
//     .then((data) => {
//         console.log("data", data);
//     });

//way to create rejected promises

// const rejectedPromise1=Promise.reject("explicit rejection");
// rejectedPromise1.catch((err)=>console.log(err));

// Promise.resolve("initial value")
// .then(data=>{
//     console.log(data);
//     throw new Error("Error from then");
// })
// .catch(err=>console.log(err));

// Promise.resolve("Initial data")
//     .then((data) => {
//         console.log("1st then:", data);
//         return Promise.reject("Rejected from first then");
//     })
//     .catch((err) => {
//         console.log("1st catch:", err);
//     });

// Promise.reject("Rejected value")
//     .catch((data) => {
//         console.log("Caught:", data);
//         throw new Error("Error from catch");
//     })
//     .catch((err) => {
//         console.log("Caught:", err.message);
//     });


// Finally based o/p questions

// Promise.resolve("Initial data")
//     .finally(() => {
//         console.log("Finally block executed");
//     })
//     .then((data) => {
//         console.log("Resolved:", data);
//     });

//if finally block throws an error or return a promise that will be rejected, the error from finally block will be the outcome of the chain 

// Promise.reject("Initial rejection")
// .finally((data) => {
//     console.log(data);
//     throw new Error("I am an error");
//     // return Promise.reject("rejection from finally")
// })
// .catch((err) => {
//     console.log("Caught:", err);
// });

// Promise.reject("Initial rejection")
// .finally((data) => {
//     console.log(data);
// })
// .catch((err) => {
//     console.log("Caught:", err);
// });

// when finally block returns a value or a promise that will not be rejected, it doesnt influence the coutcome of parent promise. 

// Promise.resolve("Initial data")
// .finally((data) => {
//     console.log(data);
//     return "finally resolved"
// })
// .then((data) => {
//     console.log("Resolved:", data);
// });


