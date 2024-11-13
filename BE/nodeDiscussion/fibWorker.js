function calculateFib(number){
    if(number<=1) return number;
    return calculateFib(number-1) + calculateFib(number-2);
}

process.on("message", ({number, data})=> {
    console.log(data);
    
    const result = calculateFib(number);
    process.send(result);
});


