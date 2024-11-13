//child process allows us to perform operations in separate processes. useful for cpu intensive tasks or lower level interactions. 

// execute a shell command . mkdir abc , touch abc.html  ls ls -lh 

// const {exec} = require("child_process");

// exec("ls -lh", (error, stdout, stderr) => {
//     if(error){
//         console.error("exec error", error);
//         return;
//     }
//     console.log(stdout);
//     console.log(stderr);
// })

// exec file -> executes an executable file directly. 

// const {execFile} = require("child_process");
// const scriptPath = './script.js';
// const args = ['arg1', 'arg2'];

// execFile('node', (error, stdout, stderr) => {
//     if(error){
//         console.error("exec error", error);
//         return;
//     }
//     console.log(stdout);
//     console.log(stderr);
// });


// 3. spawn it launches a new process and steeams the output and error streams 

const cp = require("child_process");

cp.spawn("/Applications/Google\ Chrome.app/Contents/MacOS/Google\ Chrome", ["https://www.youtube.com/","--incognito"]);

//4. fork -> creates a new instance of the nodejs runtime to runa module in a new process. allow IPC -> inter process communication . parent - child . 