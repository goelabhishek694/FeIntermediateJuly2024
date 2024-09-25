// http modules allows u to create a basic http server 
//servers handles incoming requests and sedn responses . 

const http = require("http");
const fs = require("fs");
const path = require("path");
const server = http.createServer((req,res)=>{
    //this cb is going to be called for each incoming http request
    console.log("Request URL", req.url);
    console.log("Request Method", req.method);
    
    if(req.url == "/about"){
        res.setHeader("Content-Type", 'text/plain');
        res.write("Hello, this is About Page !!");
    }else if(req.url == "/home"){
        res.setHeader("Content-Type", 'text/html');
        const filePath =  path.resolve("index.html");
        console.log(filePath);
        fs.readFile(filePath, 'utf-8', (err,data)=>{
            if(err){
                console.log(err);
                res.write(`Internal server error , ${err.message}`)
            }else{
                console.log(data);
                res.end(data);
            }
        })
    }else if(req.url == "/favicon.ico"){
        res.setHeader("Content-Type", 'image/x-icon');
        res.end();
        return;
    }else{
        res.setHeader("Content-Type", 'text/plain');
        // res.write("This url does nto exist , 404 ");
        // res.end();
        res.end("This url does nto exist , 404 ")
    }

})

const port = 3000; 
//this server we have created is going to run ;ocally. so we have made a server in our system . 
const host = 'localhost'
server.listen(port,host, () => {
    console.log(`Server is listening on http://${host}:${port}`);
})