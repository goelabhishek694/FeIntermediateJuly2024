// http modules allows u to create a basic http server 
//servers handles incoming requests and sedn responses . 


const { write } = require("fs");
const http = require("http");
const server = http.createServer((req,res)=>{
    //this cb is going to be called for each incoming http request
    
    res.setHeader("Content-Type", 'text/plain');

    res.write("Hello, World !!");

    res.end();

})

const port = 3000; 
//this server we have created is going to run ;ocally. so we have made a server in our system . 
const host = 'localhost'
server.listen(port,host, () => {
    console.log(`Server is listening on http://${host}:${port}`);
})