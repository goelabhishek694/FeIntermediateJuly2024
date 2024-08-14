//data is stored in browser -> so browser stores then extire data of a website by mapping its hostname/domain
console.log(localStorage);

//create
localStorage.setItem("name","Abhishek");
localStorage.setItem("age","123");
localStorage.setItem("hobby","sleeping");
//stringify to add non primitive data 
localStorage.setItem("user",JSON.stringify({
    name:"Abhishek",
    age:123
}));

//get

let data =localStorage.getItem("name");
console.log(data);

//parse to get non primitive data 
let userData =JSON.parse(localStorage.getItem("user"));
console.log(userData);
console.log(Object.keys(userData));

//update
localStorage.setItem("hobby","eating");

//length prop
console.log(localStorage.length);

//delete
localStorage.removeItem("hobby");

//to clear the entire local storage in one go 
localStorage.clear();


