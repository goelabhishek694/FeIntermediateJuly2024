//promises in queue 

// console.log("Before");

// setTimeout(()=>{
//     console.log("hello world");
// },0);

// Promise.resolve(100).then(data=>console.log(data));

// setTimeout(()=>{
//     console.log("bye-bye world");
// },0);

// Promise.resolve(200).then(data=>console.log(data));
// Promise.resolve(300).then(data=>console.log(data));


// console.log("After");


// Promise.all
// it is used to wait for all promises in an iterable to be resolved , or for any one to be rejcted . it returns a single promise that is - resolved with an array or error due to which any of the promise got rejected

const p1=Promise.resolve(100);
// const p2=Promise.reject("p2 promise rejected");
const p2=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        // reject("p2 promise rejected")
        resolve(200);
    },2000)
})
const p3=Promise.resolve(300);

//if i have an api i want to get data from it , 3 kind of data . 
// let p1= hello 
// let p2= world 
// let p3= !!
// hello world !!
// p1.then 
// p2.then
// p3.then 
// let allPromises=Promise.all([p1,p2,p3]);

// allPromises
// .then(arrayOfPromises=>console.log(arrayOfPromises))
// .catch(err=>console.log(err));

// polyfill for Promise.all 
// if(!Promise.all){
    Promise.myPromiseAll=function(arrayOfPromises){
        return new Promise((resolve,reject)=>{
            // resolve-> all the promises are resolved
            // reject-> if any of the promise gets rejected , thenmy entire promise rejected 

            let unresolved=arrayOfPromises.length;
            console.log(unresolved);
            const resolvedPromisesArr=[];
            if(unresolved==0){
                resolve([]);
                return;
            }

            arrayOfPromises.forEach(async (promise,index)=>{
                try{
                    let value = await promise;
                    resolvedPromisesArr[index] = value;
                    unresolved--;
                    if(unresolved==0){
                        resolve(resolvedPromisesArr)
                    }
                    // promise.then(value=>{
                    //     console.log(value);
                    //     resolvedPromisesArr[index] = value;
                    //     unresolved--;
                    //     if(unresolved==0){
                    //         resolve(resolvedPromisesArr)
                    //     }
                    // }).catch(err=>{
                    //     throw new Error(err)
                    // })
                    
                }catch(err){
                    reject(err);
                }
            })
        })
    }
// }

let myp=Promise.myPromiseAll([p1,p2,p3]);
myp.then(data=>console.log(data))
// async await 


// HW -> Promise.allSettled , promise.race , promise.any 

// writing our own promise api 

// function promiseSetTimeout(delay){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve("hey then")
//         },delay)
//     });
// }

// promiseSetTimeout(1000)
// .then(data=>console.log(data));



// function CustomPromise(executorFn){
//     const PENDING='pending';
//     const RESOLVED='resolved';
//     const REJECTED='rejected';
//     let state = PENDING;
//     let value = undefined;
//     let scbArr=[]; //store all the succes cb
//     let fcbArr=[]; // store all the failure cb 

//     this.then=(cb)=>{
//         if(state==RESOLVED){
//             cb(value);
//         }else{
//             scbArr.push(cb);
//         }
//     }

//     this.catch=(cb)=>{
//         if(state==REJECTED){
//             cb(value);
//         }else{
//             fcbArr.push(cb);
//         }
//     }

//     const resolve=(val)=>{
//         state=RESOLVED;
//         value=val;
//         scbArr.forEach(cb=>cb(value));
//     }

//     const reject=(val)=>{
//         state=REJECTED;
//         value=val;
//         fcbArr.forEach(cb=>cb(value));
//     }

//     executorFn(resolve,reject)

//     this.all=()=>{

//     }
// }


// const executorFn=(resolve,reject)=>{
//     setTimeout(()=>{
//         resolve("hey then")
//     },1000)
// }
// const myPromise=new CustomPromise(executorFn);

// myPromise.then(data=>console.log(data));
// myPromise.then(data=>console.log("2nd then ",data));
// myPromise.then(data=>console.log("3rd then ",data));
// myPromise.catch(err=>console.log(err));
// myPromise.catch(err=>console.log(err));


// Promise.allSettled
// let promisesArr=[p1,p2,p3];
// let promiseArr=Promise.allSettled(promisesArr);
// const failedPromises=[];
// promiseArr.then(arrOfData=>{
//     console.log(arrOfData);
//     arrOfData.forEach((obj,index)=>{
//         if(obj.status=="rejected"){
//             failedPromises.push({[promisesArr[index]]:obj.reason});
//         }else{
//             console.log(obj.value);
//         }
//     })
// })
// .finally(()=>{
//     console.log(failedPromises);
// })

//Promise.race -> waits for first promise that gets settled (fuflilled, rejected)
// let p1=new Promise((resolve, reject) => setTimeout(() => resolve(1),1000));
// let p2=new Promise((resolve, reject) => setTimeout(() => reject(new Error("Whoops !!")), 2000));
// let p3=new Promise((resolve, reject) => setTimeout(() => resolve(3), 3000));

// let p = Promise.race([p1,p2,p3]);

// p.then(data=>console.log(data),err=>console.log(err.message));

// Promise.any -> waits for first promise that gets fuflilled
// let p = Promise.any([p1,p2,p3]);

// p.then(data=>console.log(data),err=>console.log(err.message));
