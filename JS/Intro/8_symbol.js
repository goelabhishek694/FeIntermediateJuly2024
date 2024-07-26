//symbols i js unique and imutable value that is gaurantedd to be a unique identifier . 
// they can be used as a poroperty key in objects .


const s1="hello";
const s2="hello";

console.log(s1===s2); //true 

const a1=[10,20,30] //4k  -> [10,20,30]
const a2=[10,20,30] //8k  -> [10,20,30]

console.log(a1===a2); //false

const symbol1= Symbol("description");
const symbol2= Symbol("description");


console.log(symbol1===symbol2); //false
const person={
    name:"Nidhi",
    age:23,
    [symbol1]:"A person"
}

console.log(person[symbol1]);
console.log(person[symbol2]);

//how to access symbol's description
console.log(symbol1.toString());
console.log(symbol1.description);


// they are often used to prevent property key collison when working with objects .

// let app={
//     version: '2.0',
//     init(){
//         console.log("app installed");
//     }
// }

// let lib={
//     version: '1.0',
//     update(){
//         console.log("library updated");
//     }
// }

// const combined={...app,...lib};
// console.log(combined.version);
// console.log(combined.update());

//using symbols to avoid this collison 

const appVersion=Symbol("version")
const libraryVersion=Symbol("version")

let app={
    [appVersion]:'2.0',
    init(){
        console.log("app installed");
    }
}

let lib={
    [libraryVersion]: '1.0',
    update(){
        console.log("library updated");
    }
}

const combined={...app,...lib};
console.log(combined[appVersion]);
console.log(combined[libraryVersion]);
console.log(combined.update());


//in an object symbols are not enumberable 

for(let key in combined){
    console.log(key);
} 
console.log(Object.keys(combined));

console.log(Object.getOwnPropertySymbols(combined));



// const str="hello"+"bye"; //str is primitve
// str.toLowerCase() -> 
// const str=new String("hello") ; 