// async function foo(){
//     // return 1;
//     return Promise.resolve(1);
// }

//the word async before a function , that this function laway return a promise. so here 1 is wrapped in a promise(instantly resolved) and is returned 

// let p = foo();
// console.log(p);
// p.then(data=>console.log(data));

// takeaway: async ensures that function returns a promise and wraps a non-promise so that a promise is always retunred  

//await keyword works only inside async function 
// let value=await p;

async function foo(){
    let promise=new Promise((resolve,reject)=>{
        setTimeout(()=>resolve("done"),1000);
    });
    let data = await promise; //function exec pauses at this line , only resumes when the promise is settled . 
    //await literally suspends the function execution until promise is setledn , resumes with promise data . it doesnt cost nay cpu resources , because js engine can do other job in the meantime. 
    console.log(data);
}

// console.log("before");
// let p=foo();
// console.log("in between");
// console.log(p);
// console.log("after");

// we have a url -> github url -> users proifle dagta -> get users' dp-> present it on UI 

const url="https://api.github.com/users/goelabhishek694"

let fetchProfilePromise=fetch(url);
fetchProfilePromise
.then(response=>response.json())
.then(user=>{
    // console.log(user)
    let img=document.createElement("img");
    img.src=user.avatar_url;
    document.body.append(img);
    setTimeout(()=>{
        img.remove();
    },3000)
})
.then(()=>{
    console.log("image removed");
})


async function showAvatar(url){
    let resp = await fetch(url);
    let user = await resp.json();
    let img=document.createElement("img");
    img.src=user.avatar_url;
    document.body.append(img);
    await new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve()
        },3000)
    })
    img.remove();
    console.log("image removed");
}

showAvatar(url);





