// fs module in node stands for file system , provides a way to wokr wuth the file system on your computer/server. 
// ReadableByteStreamController, files ,manipulate directores EventCounts. 

// const str="Hello World !!"
// const myBuffer = Buffer.from(str);
// const a=myBuffer.slice(0,5).toString();
// console.log(a);

// const fb =  Buffer.from("Good");
// const sb =  Buffer.from("Morning");
// console.log(Buffer.concat([fb,sb]).toString());

const fs = require("fs");

// fs.readFile("./f1.txt", 'utf-8', (err, data) => {
//     if(err){
//         console.log(err);
//         return;
//     } 
//     console.log(data);
// })

// const content = "I store data in Buffer by default";
// fs.writeFile("./f1.txt", content, 'utf-8', (err) => {
//     if(err){
//         console.log(err);
//         return;
//     } 
//     console.log("File has been written");
    
// })

// fs.mkdir -> create a directory 
// fs.rmdir -> removes a dorectory 
// fs.readdir() -> list files 
// fs.start() -> get info about directory 

// fs.readdir("../../DOM",'utf-8', (err, data) => {
//     if(err){
//         console.log(err);
//         return;
//     } 
//     console.log(data);
// })
// fs.stat("../../DOM", (err, stats) => {
//     if(err){
//         console.log(err);
//         return;
//     } 
//     // stats.isFile(): Returns true if the path is a file.
//     // stats.isDirectory(): Returns true if the path is a directory.
//     // stats.size: The size of the file in bytes.
//     // stats.mtime: The last modification time of the file.
//     // stats.ctime: The creation time of the file.
//     // stats.atime: The last access time of the file.
//     console.log(stats);
//     console.log(stats.isDirectory());
//     console.log(stats.isFile());
    
// })

// fs.rename ().

// fs.rename('./f1.txt','./f2.txt', (err)=>{
//     if(err){
//         console.log(err);
//         return;
//     }
//     console.log("file has been renamed");
    
// })

// fs.unlink 

fs.unlink("./f2.txt",(err)=>{
    if(err){
        console.log(err);
        return;
    }
    console.log("file has been deleted");
})