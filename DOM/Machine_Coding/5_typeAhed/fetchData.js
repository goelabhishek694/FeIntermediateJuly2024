// const input = "Ind"
// const url=`https://restcountries.com/v3.1/name/${input}`;

// console.log("before");

//fetch API -> is an api given to us bybrowser . this helps us to make api calls -> get post put patch etc. this api is a promise based API . 

// .then catch 
// async await 
//abort controller

// const dataPromise=fetch(url);

// dataPromise.then(res=>{
//     console.log(res);
//     if(res.status=="404") {
//         console.log("data not found");
//         return [];
//     }
//     return res.json();
// })
// .then(data=>{
//     console.log(data)
// })
// .catch(err=>{
//     console.log(err);
// });

// console.log("after");
//get array objects -> name -> .common -> .official
// traverse over array using forEach



async function getCountries(input){
    try{
        const resp= await fetch(`https://restcountries.com/v3.1/name/${input}`);
        if(resp.status==404) return [];
        const data = await resp.json();
        return data;
    }catch(err){
        console.log("caught error", err.message);
    }
}

export default getCountries

