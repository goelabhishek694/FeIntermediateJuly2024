const fs = require("fs");
const path = require("path");
const os = require("os");

const downloadsFolderPath = path.join(os.homedir(),"Downloads");
// console.log(downloadsFolderPath);

const categories = {
    "compressed": [".rar", ".zip", ".7z", ".tar", ".gz"],
    "document" : [".txt", ".doc", ".pdf", ".xlsx", ".ppt", ".pptx", ".csv", ".docx"],
    "audio": [".mp3", ".wav", ".aac", ".flac"],
    "video" : [".mp4", ".mkv", ".avi", ".mov", ".wmv"]
};

//function to categorize the file based on its extension 
function categorizeFile(fileName) { //abc.pdf
    const fileExt = path.extname(fileName).toLowerCase();
    for(const [category, extensions] of Object.entries(categories)){
        if(extensions.includes(fileExt)) return category;
    }
    return "other"
};

function scanDownloadsFolder(){
    const categorizedFiles = {
        compressed:[],
        document: [],
        audio: [],
        video:[],
        other: []
    };

    fs.readdir(downloadsFolderPath, (err,files) => {
        if(err){
            console.error("Error reading file", err);
        }
        files.forEach((file) => {
            const filePath = path.join(downloadsFolderPath,file);
            if(fs.lstatSync(filePath).isFile()){
                const category = categorizeFile(file);
                categorizedFiles[category].push(file);
            }
        });

        console.log("Categorize files");
        console.log(categorizedFiles);
        
        
    })
}

scanDownloadsFolder();









