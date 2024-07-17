// 1.1 how are we able to use methods on primitive data types

let a = "Hello";

console.log(a.toUpperCase());

// there are object equivalents that wrap the primitve calues so we can use methods on them
//when a method is called JS automatically converts primitves into their corresponding objects
let b = new String(a);

//1.2 Object.create() -> creates a new object and links it to the prototype of an exisiting object

// Object.create(proto,options);

// const personPrototype={
//     greet:function(){
//         console.log(`Hello, my name is ${this.name}`);
//     }
// }
// //a new object is created which inherits from personPrototype
// const person1=Object.create(personPrototype);
// person1.name="Yashawant";
// person1.greet()
// // Object.freeze seal preventExtensions -> HOMEWORK
// const person2=Object.create(personPrototype,{
//     name:{
//         value:"Arman",
//         writable:false, //if the [property can be overwritten
//         enumerable:true, // if the prop can be enumerated
//         configurable:false // if property can be deleted
//     },
//     age:{
//         value:"Arman",
//         writable:false, //if the [property can be overwritten
//         enumerable:true, // if the prop can be enumerated
//         configurable:false // if property can be deleted
//     }
// });
// console.log(person2);
// person2.greet();
// person2.name="Scaler";
// console.log(person2);

// delete person2.name;
// console.log(person2);

//1.3 creating an object from another object

let candidate = {
  name: "Muthu",
  age: 24,
  job: "developer",
};
let pickNameAndAge = function (record) {
  return {
    name: record.name,
    age: record.age,
  };
};
let muthu = pickNameAndAge(candidate);
console.log(muthu); // Output : { name: 'Muthu', age: 24 }

//1.4 Inheritance 
class Candidate{
    constructor(name){
        this.name=name;
    }
    greet(){
        console.log(`Hello my name is ${this.name}`);
    }
}

class User extends Candidate{
    greet(){
        console.log(`Hello my name is ${this.name}`);
    }
}

let user=new User("Arpita");
console.log(user);
user.greet();

function User1(prop){
    this.name=prop;
}

let newObj= new User1("Scaler");
console.log(newObj);
// {} , this->{name:"Scaler"}


function Class1(name, age) {
    this.name = name;
    this.age = age;
}

let candidate1 = new Class1('Muthu', 20);
let candidate2 = new Class1('Annamalai', 25)
console.log(candidate1.name); // Output : Muthu
console.log(candidate2.name); // Output : Annamalai

//in js, prototypal inheritance is used to add methods and prop to objects 
// it allows one object to inherit prop and methods to another 
// Object.getPrototypeOf and Object.setPrototypeOf -> HW 
//proto is used to set

let candidate3={
    fly:true,
    canTalk(){
        return "sorry cant talk"
    }
}

let user3={
    canCook:true,
    canCode(){
        return "cant code"
    },
    __proto__ : candidate3,
}

console.log("can a user fly : "+user3.fly);
console.log(user3);


// prevent Extensions -> new prop cannot be added/created
let config={
    appName:"scaler.com",
    database:{
        host:"127.0.0.1",
        name:"mainDB",
        user:"admin",
        pswd:"root"
    }
} 

// let nonExtendableObject=Object.preventExtensions(config);
// config.tempServer="interviewbit.com";
// config.database.tempName="tempDB"; // will not work for nested non primitives 
// console.log(nonExtendableObject);

// Seal 
// cannot create delete 
// let nonExtendableObject=Object.seal(config);
// config.tempServer="interviewbit.com";
// delete config.appName;
// config.database.tempName="tempDB"; // will not work for nested non primitives 
// console.log(nonExtendableObject);

// Freeze 
// cannot create update delete
// let nonExtendableObject=Object.freeze(config);
// config.tempServer="interviewbit.com";
// config.appName="google.com";
// delete config.appName;
// config.database.tempName="tempDB"; // will not work for nested non primitives 
// console.log(nonExtendableObject);

