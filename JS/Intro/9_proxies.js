//Proxies -> are objects that allow us to intercept and customize operations perfromed on objects. such as reading, writing deleting 

let user={
    firstName: "Kishore",
    lastName: "Kumar",
    age: 23
}
// dob -? 2000 -> 24
// user.age=43
// user.name 

// console.log(user.age); //read 
// user.ag=32; //write 
// delete user.age //delete 

let handlers={
    get(target,key){
        console.log("target -> ",target, " key-> ", key);
        // if(key=="age"){
        //     return target[key]+18
        // }
        // if(key=="firstName") return target[key]=target[key].toUpperCase();
        if(key=="name") return target[key]=target["firstName"] + " " +target["lastName"];
        else if(key in target) return target[key];
        else throw Error("property not found")
    },
    set:function(target,key,value){
        console.log(target,key,value);
        if(key=="age") console.log("cannot alter age property");
        else return target[key]=value;
    }
}

let proxyObj= new Proxy(user,handlers);

console.log(proxyObj.age);
// console.log(proxyObj.hobby);
proxyObj.age=32;
console.log(proxyObj.firstName);
console.log(proxyObj.name);


//descriptors 
//seal freeze propert extensi
//proxy 