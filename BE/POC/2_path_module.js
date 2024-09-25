//path module in node js provide utlities for worling with file and directory paths. 

const path = require('path');

//joins the path by adding slash in between
//in windows backslashes \be\POC , unix based system  forward slashes /
// const fullPath = path.join("BE","POC/","2_path_module.js");
// console.log(fullPath);

//create an absolute path 
const absolutePath = path.resolve('folder', 'subfolder', 'file.txt');
console.log(absolutePath);

//prints base name of the file
const fileName = path.basename(absolutePath);
console.log(fileName);

const dirName = path.dirname(absolutePath);
console.log(dirName);

// u can create command line projects from these modules . 


