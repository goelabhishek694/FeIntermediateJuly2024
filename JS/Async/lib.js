// a person has 100 in his bank a/c , he wants to buy a tv of 20 inr 
// runMlAlgo fn of lib . in runMlAlgo we are passing the amount and cb -> our amount woukd be deducted from bank 

// function runAlgo(amount, cb){
//     console.log("running algo");
//     //check if product is serviceable in pincode 
//     //get eta for delivery 
//     //check in stock 
//     console.log("processing payment");
//     setTimeout(function(){
//         console.log("payment done");
//         cb();
//         cb();
//         cb();
//         cb();
//         cb();
//     }, 1000);
// }


function runAlgo(){
    return new Promise((resolve,reject)=>{
        console.log("running algo");
        //check if product is serviceable in pincode 
        //get eta for delivery 
        //check in stock 
        console.log("processing payment");
        setTimeout(function(){
            console.log("payment done");
            resolve("all check performed");
            // resolve();
            // resolve();
            // resolve();
            // resolve();
            // reject("product not available")
        }, 1000);
    })
}
module.exports = {
    runAlgo,
}

// takeaway 

// 1. multiple resolve does not mean anything 
// 2. rejct after resolve wont mean anything 