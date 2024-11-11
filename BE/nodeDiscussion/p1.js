// const content = Math.random().toString(36).repeat(10000000); // approx 130MB
// require("fs").writeFileSync("big.file", content);


const http = require("http");
const fs = require("fs");
const server = http.createServer();

server.listen(3000, () => {
    console.log("server started");
});

server.on("request", (req, res) => {
    fs.readFile("./big.file", (err,data) => {
        if(err) throw err;
        res.end(data);
    });
});