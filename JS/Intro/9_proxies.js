//Proxies -> are objects that allow us to intercept and customize operations perfromed on objects. such as reading, writing deleting 

let user={
    firstName: "Kishore",
    lastName: "Kumar",
    age: 23
}

// console.log(user.age); //read 
// user.ag=32; //write 
// delete user.age //delete 

let handlers={
    get(target,key){
        console.log("target -> ",target, " key-> ", key);
        // if(key=="age"){
        //     return target[key]+18
        // }
        if(key=="firstName") return target[key]=target[key].toUpperCase();
        else if(key in target) return target[key];
        else throw Error("property not found")
    },
    set:function(target,key,value){
        console.log(target,key,value);
        if(key=="age") console.log("cannot later age property");
        else return target[key]=value;
    }
}

let proxyObj= new Proxy(user,handlers);

console.log(proxyObj.age);
// console.log(proxyObj.hobby);
proxyObj.age=32;
console.log(proxyObj.firstName);
