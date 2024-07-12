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

function outerFunction(){
    let count = 0;
    function innerFunction(){
        count++;
        return count;
    }
    return innerFunction
}

const inner=outerFunction();
console.log(inner());
console.log(inner());

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

let iamINGEC = 200;
function getFirstName(firstName) {
    console.log("I have got your first Name");
    return function getLastName(lastName) {
        console.log("I have got Your last Name");
        return function greeter() {
            console.log(`Hi I am ${firstName} ${lastName}`);  //closure -> remebrs varibales even though outermost function have finished executing 
            console.log("Hi GEC", iamINGEC) //lexical scope 
        }
    }
}

const fnNameRtrn=getFirstName("Scaler");
console.log(fnNameRtrn);

const lnNameRtrn=fnNameRtrn("InterviewBit");
console.log(lnNameRtrn());



