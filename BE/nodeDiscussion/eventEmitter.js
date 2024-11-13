// const EventEmitter = require("events");
// const eventEmitter = new EventEmitter();


// eventEmitter.on("greet", (name) => {
//     console.log("hello", name);
// });

// // eventEmitter.once("greet", (name) => {
// //     console.log("hello", name);
// // });

// eventEmitter.emit("greet", "Scaler");
// eventEmitter.emit("greet", "Scaler");

const EventEmitter = require("events");
const server = new EventEmitter();

server.on("start", () => {
    console.log("server has started");  
});

server.on("start", () => {
    console.log("hello i am server");  
});

server.on("request", (requestData) => {
    console.log("request received", requestData);  
});

server.on("error", (error)=>{
    console.log(error);
})

server.emit("start");
server.emit("request", req);
server.emit("error",err)