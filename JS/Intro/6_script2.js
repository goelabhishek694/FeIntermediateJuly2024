// // greet() //error
// function greet2(){
//     console.log("bye");
// }

// let count=10;
// // increment(); //error 
// console.log(count);

//i cannot use count, greet and multiply over here directly. i have to import them . 


//named import 
//when we import , that file is executed
import {count,increment} from './5_script1.js';
import {greet} from './5_script1.js';
//imports are cached . imported only once. on subsequent imports, we receive a reference to cached file. the file is not executed again 

//default import 
//when importing a default export , we can assign it any name we chose
// import myMultiply from './5_script1.js'

console.log(count);
increment();
console.log(count);
greet();
console.log(myMultiply(2,3));

//imports are cached


