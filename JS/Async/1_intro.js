// console.log("before");
// function fn(){
//     console.log("I am fn");
// }
// setTimeout(fn,2000);
// console.log("after");

// Questions 1
// let a = true;
// console.log("Before");
// setTimeout(() => {
//     a = false;
// console.log("I broke the while loop");
// }, 1000);
// console.log("After");
// while(a){
// //must be a cond in while so that we cna come out of it .
// }

// Question  2
// console.log("Before");

// const cb2 = () => {
//         console.log("Set timeout 1");
//         while(1){

//         }
// }

// const cb1 = () => console.log("hello");

// setTimeout(cb2, 1000)

// setTimeout(cb1, 2000)

// console.log("After");

// Question 3

// console.log("Before");

// const cb2 = () => {
//         console.log("Set timeout 1");
//         let timeInFuture = Date.now() + 5000;
//         while(Date.now() < timeInFuture){

//         }
// }

// const cb1 = () => console.log("hello");

// setTimeout(cb2, 1000)

// setTimeout(cb1, 2000)

// console.log("After");

// const fs = require("fs");

//synchronous function provided by nodejs to read a file
// console.log("Before");
// const data=fs.readFileSync("./f1.txt","utf-8");
// console.log(data);
// console.log("After");

// asynchronous code

// console.log("Before");
// fs.readFile("./f1.txt",function(err,data){
//     if(err) console.log(err);
//     else console.log(data+"");
// });
// console.log("After");

//this is blocking the main thread -> sync code , execution serial
// console.log("Before");
// const c1 = fs.readFileSync("./f1.txt", "utf-8");
// const c2 = fs.readFileSync("./f2.txt", "utf-8");
// console.log(c1);
// console.log(c2);
// console.log("After");

//asynchronous code to read 2 files -> parallel executuion
console.log("Before");
fs.readFile("./f1.txt", function (err, data1) {
  if (err) console.log(err);
  else console.log(data1 + "");
});
fs.readFile("./f2.txt", function (err, data2) {
  if (err) console.log(err);
  else console.log(data2 + "");
});
console.log("After");

//asynchronous code with serial execution
console.log("Before");
fs.readFile("./f1.txt", f1cb);

function f1cb(err, data) {
  console.log(data + "");
  fs.readFile("./f2.txt", function (err, data2) {
    if (err) console.log(err);
    else console.log(data2 + "");
  });
}
console.log("After");

const sum = (a, b, c, d) => {
  return a + b + c + d;
};

function curry(fns) {
  return function curried(...args) {
    if (args.length >= fns.length) {
        console.log(args);
        console.log(fns.length);
      return ()=>fns(...args);
    } else {
        console.log("in here");
      return function (...nextArgs) {
        return curried(...args, ...nextArgs);
      };
    }
  };
}
const curryFunction = curry(sum);
let ans=curryFunction(1)(2)(3)(4)(5)(6)
console.log(ans);
