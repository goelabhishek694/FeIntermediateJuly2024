// lexical scope
// allows function scope to access variables in outer scope
// outer scope is determined wrt to function definition
// var varName=10;
// function b(){
//     console.log(varName);
// }

// function fn(){
//     var varName=20;
//     b();
//     console.log(varName);
// }
// fn();

// Closures

// closures is JS lexcial scoping technique used to preserve  variables from a function's outer scope in its inner scope
// function along with it's lexical scope forms a closure

// function outerFunction(){
//     let count = 0;
//     function innerFunction(){
//         count++;
//         return count;
//     }
//     return innerFunction
// }

// const inner=outerFunction();
// console.log(inner());
// console.log(inner());

// function createCounter(init, delta) {
//     function count() {
//         init = init + delta;
//         return init
//     }
//     return count
// }
// let c1 = createCounter(10,5)
// let c2 = createCounter(5,2)
// console.log(c1()) // 15
// console.log(c2()) // 7
// console.log(c1()) // 20
// console.log(c2()) // 9

//nested closures

// let iamINGEC = 200;
// function getFirstName(firstName) {
//     console.log("I have got your first Name");
//     return function getLastName(lastName) {
//         console.log("I have got Your last Name");
//         return function greeter() {
//             console.log(`Hi I am ${firstName} ${lastName}`);  //closure -> remebrs varibales even though outermost function have finished executing
//             console.log("Hi GEC", iamINGEC) //lexical scope
//         }
//     }
// }

// const fnNameRtrn=getFirstName("Scaler");
// console.log(fnNameRtrn);

// const lnNameRtrn=fnNameRtrn("InterviewBit");
// console.log(lnNameRtrn());

// //Currying

// // fn(a,b,c)-> fn(a)(b)(c)

// function sum(a,b){
//     return a+b;
// }

// // sum(a,b) -> sum(a)(b)

// function curry(fn){
//     return function(a){
//         return function(b){
//             return fn(a,b)
//         }
//     }
// }

// let curriedFunc=curry(sum);
// // console.log(curriedFunc);
// // let anotherFn=curriedFunc(2);
// // console.log(anotherFn);
// // let ans=anotherFn(3);
// // console.log(ans);
// let a=sum(2,3)
// console.log(a);

// let ans=curriedFunc(2)(3);
// console.log(ans);

//logging function
// function log(date, importance, message){
//     alert(`[${date.getHours()}:${date.getMinutes()}] [${importance}] ${message}`);
// }
// //lodash currying function
// // npm i lodash
// // let _=require("lodash")
// log= _.curry(log);

// log(new Date(),"DEBUG","some debug");

// let logNow=log(new Date());
// //partial function from a function , 1st argument has already been fixed.
// logNow("INFO","some info");

// let debugNow=logNow("DEBUG");
// debugNow("message");

// question is
// const sum = (a,b,c,d) => a+b+c+d write curry polyfill to handle scenarion like curried like curriedsum(1)(2)(3)(4)(5), but answer remains 10

// function counter(arg){
//     let count=0;
//     count++;
//     if(arg==0){
//         return count;
//     }else{
//         return function inner(arg){
//             count++;
//             if(arg==0){
//                 return count;
//             }
//             else return inner
//         }
//     }
// }

// console.log(counter(0)); //1
// console.log(counter()(0)) //2
// console.log(counter()()()()(0)) //5
// console.log(counter()()()()()()()()()()()(0)) //12

// IQ

// function outer() {
//     let arrFn = [];
//     for (var i = 0; i < 3; i++) {
//         arrFn.push(function fn() {
//             console.log(i);
//         })
//     }
//     return arrFn;
// }
// let arrFn = outer();
// arrFn[0](); //3
// arrFn[1](); //3
// arrFn[2](); //3

// IQ -2

// function outer() {
//     let arrFn = [];
//     for (var i = 0; i < 3; i++) {
//         arrFn.push(function fn() {
//             i++;
//             console.log(i);
//         })
//     }
//     return arrFn;
// }
// let arrFn = outer();
// arrFn[0](); //4
// arrFn[1](); //5
// arrFn[2](); //6

// IQ-3

// function outer() {
//   let arrFn = [];
//   let i = 0;
//   for (i = 0; i < 3; i++) {
//     arrFn.push(function fn() {
//         i++;
//       console.log(i);
//     });
//   }
//   return arrFn;
// }
// let arrFn = outer();
// arrFn[0]();
// arrFn[1]();
// arrFn[2]();

// IQ-4 

// function outer() {
//     let arrFn = [];
    
//     for (let i = 0; i < 3; i++) {
//         //each iteration of the loop with let i , creates a new binding for i ;
//         arrFn.push(function fn() {
//             console.log(i);
//         })
//     }
//     return arrFn;
// }
// let arrFn = outer();
// arrFn[0]();
// arrFn[1]();
// arrFn[2]();

//Creating private variables using closure 

function createCounter(){
    let count=0;
    return {
        increment:function(){
            count++;
        },
        decrement:function(){
            count--;
        },
        getCount:function(){
            return count;
        }
    }
}

const counter=createCounter();
counter.increment()
counter.increment()
counter.increment()
counter.increment()
counter.increment()
console.log(counter.getCount());

// Benefits of Using Closures for Private Variables
// Encapsulation: Closures help in encapsulating the state of a variable. This means the internal state can only be changed using specific functions provided, preventing unintended or harmful manipulation.

// Data Hiding: Private variables are not accessible from the outside scope. This helps in hiding implementation details and protecting the integrity of the data.

// Avoid Global Namespace Pollution: Closures allow you to keep variables local to a function, reducing the risk of name collisions and keeping the global namespace clean.

// Maintainability: By restricting access to variables, closures make the code easier to understand and maintain. The interface to the data is well-defined and limited.

// Security: Private variables can protect sensitive data from being accessed or modified unintentionally. This is especially important in web applications where data integrity is crucial.

// Disadvantages Without Closures
// If closures were not available to create private variables, the following disadvantages might arise:

// Global Variables: Without closures, developers might rely on global variables to store state, leading to a higher risk of variable name collisions and unexpected behavior due to unintended modifications.

// Lack of Data Hiding: Without the ability to create private variables, it becomes difficult to hide implementation details. This can lead to tightly coupled code, where changes in one part of the codebase may inadvertently affect other parts.

// Reduced Security: Sensitive data would be more exposed and could be easily accessed or modified by other parts of the program, leading to potential security risks.

// Increased Complexity: Managing the state of variables without closures can make the code more complex and harder to debug. Each function or module would need to manually handle its state, increasing the likelihood of errors.

// Poor Encapsulation: Without closures, achieving true encapsulation becomes difficult. Encapsulation is key to modularity and reusability in software design, and without it, the codebase can become tangled and less modular.


// Creating memoized function

function calc(n){
    let sum=0;
    for(let i=0;i<n;i++){
        sum+=n;
    };
    return sum;
}
// //1.29ms
// console.time();
// console.log(calc(75653));
// console.timeEnd();

// //1.22ms
// console.time();
// console.log(calc(75653));
// console.timeEnd();

function memoize(fn){
    let cache={};
    return function (n){
        let isTheInputPresent = cache[n] !== undefined;
        if(isTheInputPresent){
            return cache[n];
        }else{
            const result=fn(n);
            cache[n]=result;
            return result;
        }
    }
}

let efficientCalcFn=memoize(calc);

console.time();
console.log(efficientCalcFn(75654));
console.timeEnd();

console.time();
console.log(efficientCalcFn(75654));
console.timeEnd();
