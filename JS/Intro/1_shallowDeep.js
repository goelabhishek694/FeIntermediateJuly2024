//copy happens for first level of nested elements only 

// 2 level deep
// let obj={
//     name:"Arman",
//     age:21,
//     address:{
//         houseno:234,
//         city:"Mumbai",
//         state:"Maharashtra",
//         country:"India"
//     }
// };

// let shallowCopyObj = {obj};
// let normalCopyObj=obj;
//spread operator is used to shallow copy
// let shallowCopyObj = {...obj}; 
// console.log(shallowCopyObj);

// obj.name="Nidhi";
// console.log(normalCopyObj);
// console.log(shallowCopyObj);

// let userProfile={name:} userprofile -> 8k -> name

// let nestedArr=[10,[20,30],40]; //16k
// console.log(nestedArr);
// 0:10
// 1:20k
// 2:40 

// let shallowCopyNestedArr=[...nestedArr]; //24k
// 0:10
// 1:20k
// 2:40 

// nestedArr[0]=25;
// nestedArr[1][0]=200;
// console.log(shallowCopyNestedArr);
// console.log(nestedArr);

// 2nd way to shallow copy 
// Object.assign(dest,source);
// dest ->  where needs to be copied
// source -> from where we copy

// let person = {
//     firstName: 'John',
//     lastName: 'Doe',
//     address: {
//         street: 'North 1st street',
//         city: 'San Jose',
//         state: 'CA',
//         country: 'USA'
//    },
// };

// let copiedObj=Object.assign({},person);
// console.log(copiedObj);

let obj1={
    name:"Arman",
    age:21,
    address:{
        houseno:234,
        city:"Mumbai",
        state:"Maharashtra",
        country:"India"
    },
    hello:()=>{
        console.log("hello");
    } 
};

let deepCopyObj=JSON.parse(JSON.stringify(obj1));
//dates, function, Maps, Sets are lost in stringify and parse 
// //this is very expensive method -> json.parse requires regex matching , regex is very slow . 
// obj.address.city="Nagpur";

console.log(deepCopyObj);
// console.log(obj);


// let nestedArr=[10,[20,30],40];
// let deepCopyArr=JSON.parse(JSON.stringify(nestedArr));

// nestedArr[1][0]=200;
// console.log(deepCopyArr);
// console.log(nestedArr);

// 1. lodash -> npm lodash -> deepCopy
// 2. implement deep copy on our own 


let person = {
    firstName: 'John',
    lastName: 'Doe',
    address: {
        street: 'North 1st street',
        city: 'San Jose',
        state: 'CA',
        country: 'USA'
    },
    friends: ["Steve", "Nikola", "Ray",{ name: "Jai", lastName: "Roy" },[10,20]]
};


let superClone=(obj)=>{
    let isArr=Array.isArray(obj);
    let clone= isArr ? []: {};
    for(let prop in obj){
        if(Array.isArray(obj[prop])){
            clone[prop]=[...obj[prop]];
            for(let i=0;i<clone[prop].length;i++){
                if(typeof obj[prop][i] == "object"){
                    clone[prop][i]=superClone(obj[prop][i]);
                }
            }
        }
        else if(typeof obj[prop] == "object"){
            clone[prop]=superClone(obj[prop])
        }
        //copies each key value pair of an object 
        else clone[prop]=obj[prop]; //{} -> {firstName:"John"}
    }
    return clone;
}

let deepCopiedObj=superClone(person);
console.log(deepCopiedObj);

person.address.state="WA";
person.friends[0]="Yashwant";
person.friends[3].lastName="Kumar";
console.log(person);
console.log(deepCopiedObj);

// Flatten an array 

let input = [1, 2, 3, [4, 5],[6, 7, 8, [9, 10, 11]]];
// o/p->[1, 2, 3, 4, 5,6, 7, 8, 9, 10, 11];
function flatenArr(srcArr){
    let newArr=[];
    for(let i=0;i<srcArr.length;i++){
        let ele=srcArr[i];
        let isElemArr=Array.isArray(ele);
        if(isElemArr){
            let smalleFlattenArr=flatenArr(ele);
            newArr.push(...smalleFlattenArr);
        }
        else newArr.push(ele);
    }    
    return newArr;
}

let flatArr=flatenArr(input);
console.log(flatArr);


// HW
// Array.prototype.flat()= 
// pass in level -> 1, 2

// objects -> flatten an obj 

let obj={
    name:"Arman",
    age:21,
    address:{
        houseno:234,
        city:"Mumbai",
        state:"Maharashtra",
        country:"India"
    }
};

obj={
    "name":"Arman",
    "age":21,
    "address.houseno":234,
    "address.city":"Mumbai",
    "address.state":"Maharashtra",
    "address.country":"India",
}

// obj1.hello.age="23";
// console.log(obj1);
