We’ll use Node.js built-in modules such as:

fs (to interact with the filesystem)
path (to work with file/folder paths)
Command-Line Application Features:
Read File Contents: If a file path is provided, read and display the contents.
Display Folder Structure: Represent the folder structure in a tree format.
List Files in Directory: List all files in a directory.
Create a New File: Allow the user to create a new file with some content.
Step 1: Setup
First, ensure you have Node.js installed.

Create a project folder for your command-line application.

Inside the folder, run the following command to initialize the project:

bash
Copy code
npm init -y
Create a file called app.js for your application.

Step 2: Application Code
js
Copy code
// app.js
const fs = require('fs');
const path = require('path');

// Helper function to display usage instructions
const displayHelp = () => {
  console.log(`
    Usage:
      node app.js [option] [path]

    Options:
      --read [file-path]       : Read and display the contents of a file
      --tree [folder-path]     : Display folder structure in tree format
      --list [folder-path]     : List all files in a directory
      --create [file-path]     : Create a new file and add content
      --help                   : Show help message
  `);
};

// Function to read file contents
const readFileContents = (filePath) => {
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      console.error(`Error reading file: ${err.message}`);
      return;
    }
    console.log(`Contents of ${filePath}:\n`);
    console.log(data);
  });
};

// Function to create a new file with some content
const createFile = (filePath) => {
  const content = 'This is a new file created using Node.js fs module.\n';
  fs.writeFile(filePath, content, (err) => {
    if (err) {
      console.error(`Error creating file: ${err.message}`);
      return;
    }
    console.log(`File created successfully at ${filePath}`);
  });
};

// Function to display folder structure in tree format
const displayTreeStructure = (folderPath, indent = '') => {
  if (!fs.existsSync(folderPath)) {
    console.error('Invalid folder path.');
    return;
  }

  const items = fs.readdirSync(folderPath);

  items.forEach((item, index) => {
    const itemPath = path.join(folderPath, item);
    const isLast = index === items.length - 1;
    const prefix = isLast ? '└── ' : '├── ';

    console.log(indent + prefix + item);

    if (fs.lstatSync(itemPath).isDirectory()) {
      const newIndent = indent + (isLast ? '    ' : '│   ');
      displayTreeStructure(itemPath, newIndent);
    }
  });
};

// Function to list all files in a directory
const listFilesInDirectory = (folderPath) => {
  fs.readdir(folderPath, (err, files) => {
    if (err) {
      console.error(`Error reading directory: ${err.message}`);
      return;
    }
    console.log(`Files in directory ${folderPath}:`);
    files.forEach((file) => console.log(file));
  });
};

// Main function to handle command-line arguments
const main = () => {
  const args = process.argv.slice(2); // Remove "node" and script name

  if (args.length === 0 || args.includes('--help')) {
    displayHelp();
    return;
  }

  const option = args[0];
  const userPath = args[1];

  switch (option) {
    case '--read':
      if (!userPath) {
        console.error('Please provide a file path.');
        return;
      }
      readFileContents(userPath);
      break;
    case '--tree':
      if (!userPath) {
        console.error('Please provide a folder path.');
        return;
      }
      displayTreeStructure(userPath);
      break;
    case '--list':
      if (!userPath) {
        console.error('Please provide a folder path.');
        return;
      }
      listFilesInDirectory(userPath);
      break;
    case '--create':
      if (!userPath) {
        console.error('Please provide a file path to create.');
        return;
      }
      createFile(userPath);
      break;
    default:
      console.error('Unknown option.');
      displayHelp();
  }
};

// Call the main function
main();
Step 3: Run the Application
You can now run this command-line app and test the functionalities:

Read File Contents:

bash
Copy code
node app.js --read path/to/your/file.txt
Display Folder Structure:

bash
Copy code
node app.js --tree path/to/your/folder
List Files in Directory:

bash
Copy code
node app.js --list path/to/your/folder
Create a New File:

bash
Copy code
node app.js --create path/to/newfile.txt
Display Help:

bash
Copy code
node app.js --help
Features Overview
Reading a File: When you provide a file path with the --read option, the app reads and displays its contents.

Folder Tree Representation: The --tree option recursively displays the folder structure in a tree format, similar to the Unix tree command.

List Files in Directory: The --list option lists all files in the provided directory.

Create New File: The --create option allows you to create a new file with some predefined content.

Help: The --help option displays usage instructions.

Notes:
The fs.lstatSync function checks whether an item is a file or a directory.
The fs.readdirSync and fs.readdir functions list all items in a directory.
The fs.readFile and fs.writeFile functions are used to read from and write to files, respectively.