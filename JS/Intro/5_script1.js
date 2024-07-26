// let name="Learner";
// function greet(){
//     console.log("Hello");
// }
// // greet2()

// let count=0;
// function increment(){
//     count++;
// }


//Named exports
// explicitly specifying the items wwe want to export from a module 
//function class variable 
export function greet(){
    console.log("Hello");
}

export let count=0;

export function increment(){
    count++;
}

console.log("hello i am executed");

//there canbe obly one default export in each file . 
//default exports allow us to designate a single "default" export for a module 
// this is especially useful when there is a primary function or a class that moduel provides 

export default function multiply(a,b){
    return a*b;
}