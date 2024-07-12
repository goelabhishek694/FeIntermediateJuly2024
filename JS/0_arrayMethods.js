//slice 

let arr=[10,20,30,40,50];
// starting at si and ending before ei 
// [si,ei)
//original arr remains intact
// let slicedArr=arr.slice(0,3);
// console.log(arr);
// let slicedArr=arr.slice(0);
// let slicedArr=arr.slice(-2);
// let slicedArr=arr.slice(3);
// let slicedArr=arr.slice(1,-1);
// console.log(slicedArr);

// SPLICE
//orignal array is altered
const cars=["Porsche","BMW","Bentley","Mercedes"];
//remove elements
//(index,count)
// let splciedArr=cars.splice(2,1);
// console.log(cars);
// console.log(splciedArr); //contains array of spliced elements

//replace 
// let splicedArr=cars.splice(2,1,"Audi");
// console.log(cars);
// console.log(splicedArr); //contains array of spliced elements

//adding
let splicedArr=cars.splice(2,0,"Audi","Rolls-Royce");
console.log(cars);
console.log(splicedArr); //contains array of spliced elements


//concat 
let arr2=[60,70,80];

// let concatArr=arr.concat(arr2);
// console.log(concatArr);

Array.prototype.myConcat=function(arr){
    return [...this,...arr]
}

let concatArr=arr.myConcat(arr2);
console.log(concatArr);

//split 
let str="Hi i am String";
// let arr1=str.split("");
// console.log(arr1);

let arr1=str.split(" ");
console.log(arr1);

// let arr1=str.split("i");
// console.log(arr1);
// ["H"," "," am Str","ng"]

//join 
// HW
let joinedStr=arr1.join("-");
console.log(joinedStr);