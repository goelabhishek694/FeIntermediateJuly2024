const express = require("express"); 
const http = require("http"); //
const {Server} = require("socket.io");

const app = express(); // handle routing and middleware;
app.use(express.static("public"));
const server = http.createServer(app); //raw http server to operate with websockets
// server is the http server that handles both regular http requests (via express) and websockets connections (via socket.io)
const io = new Server(server); 
//it initializes socket.io on the same http server that was created for express . this setup allows the http server to handle npth websocket connection and standard htto requests 
// this io instanc eis going to listen for websocket connections on the same server instance 


//this eevent is triggered whenever a new websocket slient connects 
io.on("connection", (socket) => {
    console.log("a user connected", socket.id);

    //send a message from server to client 
    socket.emit("message", "welcome to websocket server");

    //handle messages from clients
    socket.on("message", (msg) => {
        console.log("Message from client: ", msg);
        //broadcast the message to all other clients 
        socket.broadcast.emit("broadcast",msg);
    });

    //handle disconnection
    socket.on("disconnection", () => {
        console.log("user disconnected", socket.id);
        
    })
});

app.get("/", (req,res) => {
    res.send("hello world");
});

server.listen(3000, () => console.log("Listening at 3000"));