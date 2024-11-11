### Node.js Modules

#### Inbuilt Modules

Inbuilt modules are integrated into Node.js and can be used without any additional installation. They provide core functionalities like file system access, HTTP server creation, path manipulation, and more.

**Examples:**

- **http**: For creating HTTP servers.
- **fs**: For handling file system operations.
- **path**: For working with file and directory paths.

#### Local Modules

Local modules are custom modules created in a project. They help in structuring and organizing code into different files and directories.

**Creating & Using**: You can create a local module by exporting functions, objects, or variables from a file using `module.exports` and then require them in other files as needed.

#### Third Party Modules

Third-party modules are libraries or packages developed by the community, available through npm (Node Package Manager).

**Usage**: They are installed using `npm install <package_name>` and included in your project using `require()`.

### Node.js Streams

Streams are collections of data that might not be available all at once and don't have to fit in memory. They allow handling of reading/writing files, network communications, or any kind of end-to-end information exchange in an efficient way.

**Example**: In video streams, a portion of the video is buffered (pre-loaded) and played while the next portion is being downloaded. This approach ensures a smooth viewing experience without requiring the entire file to be downloaded first.

### Child Process

Allows Node.js to run system commands, invoke scripts, or spawn new processes. Useful for leveraging OS-level features and handling CPU-intensive tasks.

**Doing Process Heavy Tasks**: Node.js is single-threaded, and CPU-intensive tasks can block the event loop, affecting performance.

**Child Processes**: Offload heavy computation to child processes using the `child_process` module.

### Node.js Overview

- **JavaScript on the Server**: Traditionally, JavaScript was used only in web browsers. Node.js allows you to use JavaScript to write server-side code, meaning you can write the logic that runs on your server using JavaScript.
- **Runtime Environment**: It's not a programming language or a framework, but a runtime environment that allows JavaScript to be run on the server side.
- **Built on Chrome's V8 Engine**: Node.js runs on the V8 JavaScript engine, which powers Google Chrome. This means it's incredibly fast and efficient at running JavaScript code.

#### Main Features

- **Non-Blocking, Event-Driven Architecture**: Designed to handle asynchronous operations, allowing it to manage multiple operations concurrently without waiting for any to complete. This makes it very efficient for tasks like reading/writing to the file system, network operations, or any operations that rely on external data sources.
- **Single-Threaded**: Despite being single-threaded, it can handle numerous concurrent connections efficiently due to its event-driven nature and use of callbacks or promises.
- **Non-Blocking**: Similar to waiters in a restaurant, Node.js doesn’t wait for tasks like reading files or database queries to finish before moving on to the next task. It starts a task, and while it's being processed, Node.js can start handling another task.
- **Event-Driven**: When an event occurs, Node.js reacts by executing the code meant to handle that event (like processing the file or responding to the user's request).

### Browsers and Node.js

Both use Google's V8 JavaScript engine to compile JavaScript into native machine code. This engine is known for its performance and efficiency. Both support JavaScript, meaning the core syntax and standard JavaScript functions are the same across both platforms.

#### APIs and Global Objects

- **Browsers**: Provide a runtime environment for client-side JavaScript, enabling interaction with web pages (DOM manipulation), handling user events, and rendering content.
- **Node.js**: Provides a server-side runtime environment. It extends JavaScript capabilities to interact with the filesystem, perform network operations, and run applications outside of a browser context.

#### Availability of APIs

- **Browser Environment and APIs**: In a web browser, APIs like the DOM, fetch, and others are directly available as part of the browser's global environment. You don't need to import them using `require` or any other import mechanism.
- **Node.js Environment and APIs**: Node.js uses a module system (CommonJS, specifically). Most of its core functionality, like file system (`fs`), networking (`http`), path operations (`path`), etc., are organized as modules. To use these modules, you need to import them into your script using the `require` function.

## Code Example

Create a folder `nodeDiscussion` and a file `nodeExplorer.js`:

```javascript
console.log(global);
console.log("dir name", __dirname, "file name", __filename);
```

Observe the methods like `clearTimeout`, `setInterval`, etc., are part of the global object. Notice the directory name and file name. Other features like `fs`, `path`, `http`, etc., are modules and need to be included in the code.

Try doing:

```javascript
console.log(process);
```

- **process.env**: Stores environment variables as key-value pairs. Commonly used to access system environment variables or set configuration options for the application.
- **process.cwd()**: Returns the current working directory of the Node.js process.
- **process.argv**: An array containing the command-line arguments passed when the Node.js process was launched.
- **process.pid**: The process ID of the Node.js process.
- **process.stdin, process.stdout, process.stderr**: Streams for interacting with input/output.

```javascript
console.log(process.moduleLoadList);
```

This array contains the names of the built-in modules that have been loaded by the process. It's useful for debugging or understanding which modules your application is using.

## Some Awesome Resources

- [Awesome Node.js](https://github.com/sindresorhus/awesome-nodejs): This repository is a valuable resource for anyone looking to explore the Node.js ecosystem, find useful packages, or learn more about Node.js development.
- [Awesome React](https://github.com/enaqx/awesome-react)

## Understanding the Role of Libuv in Request Handling

**libuv**: It's a cross-platform C library that Node.js uses under the hood. It provides asynchronous I/O capabilities, handling operations like file system operations, networking, and timers.

**Request Flow**:
- When a request arrives, it's initially handled by the operating system's networking layer.
- libuv then picks up the request from the OS and queues it for processing by Node.js.
- If the Node.js server is busy (e.g., executing a CPU-intensive task), libuv holds incoming requests in a queue. Once the server is ready to process new requests, libuv forwards them to Node.js.

This mechanism ensures efficient handling of I/O operations and concurrency in Node.js, but it doesn't prevent the blocking of the event loop by synchronous, CPU-intensive tasks. 

### Streams

In a Node.js application, how can you efficiently handle large files, like logs or media, without consuming excessive memory or blocking other operations? In Node.js, streams allow data to be processed in smaller chunks, one piece at a time, without needing to load the entire data into memory. This is like processing a large file bit by bit, instead of loading the whole file at once, which is memory-efficient and keeps the application responsive.

**Example**:
- Http request/response, crypto, and some methods on the `fs` module are internally stream-enabled.
- Streams make use of `zlib`.

#### 4 Types of Streams

1. **Readable**: Stream to read the data (`fs.createReadStream`), HTTP request object.
2. **Writable**: Stream for writing the data (`createWriteStream`).
3. **Duplex**: Sockets.
4. **Transform**: Change form from one to another. Output is computed from the input (e.g., zlib, crypto).

### EventEmitter Class

The `EventEmitter` class in Node.js is a cornerstone of its event-driven architecture. It provides a means for objects to emit custom events and to attach listeners to these events, facilitating asynchronous programming. Many core modules in Node.js, like `fs`, `http`, and `stream`, use `EventEmitter` for handling events like `data` (when data is available for reading) or `end` (when the end of the stream is reached).

```javascript
server.on('listening', () => {
  console.log('Server is listening on port 3000');
});
```

### Code for Reading Stream

In the `fs.js` file, comment other code and add below:

```javascript
const filePath = path.join(__dirname, 'big.file');
console.log(filePath);
const readableStream = fs.createReadStream(filePath);

readableStream.on('data', (chunk) => {
  console.log(`Received ${chunk.length} bytes of data.`);
});

readableStream.on('end', () => {
  console.log("Finished reading file");
});
```

Notice that there is no memory spike in the activity monitor.

### Code for Writing Stream

```javascript
const filePath = path.join(__dirname, 'big.file');
console.log(filePath);
const readableStream = fs.createReadStream(filePath);
const writableStream = fs.createWriteStream('copyOfBig.file');

readableStream.on('data', (chunk) => {
  console.log(`Received ${chunk.length} bytes of data.`);
  writableStream.write(chunk);
});

readableStream.on('end', () => {
  writableStream.end();
  console.log("Finished reading and writing the file");
});
```

### Pipe

The `pipe()` function is a method on Readable streams and is used to connect a readable stream to a writable stream. It automatically handles the data transfer from the readable stream to the writable stream. To simplify your code using the `pipe` method, you can replace the manual read and write operations with a single `pipe()` call.

```javascript
const filePath = path.join(__dirname, 'big.file');
console.log(filePath);
const readableStream = fs.createReadStream(filePath);
const writableStream = fs.createWriteStream('anotherCopyOfBig.file');

readableStream.pipe(writableStream);

readableStream.on('error', (err) => {
  console.log("Error while reading", err);
});
writableStream.on('error', (err) => {
  console.log("Error while writing", err);
});
```

### Fixing Problem Statement 1

How will we fix the first problem statement of a client requesting a large file? We create a read stream and then write the stream to response.

```javascript
server.on('request', (req, res) => {
  const src = fs.createReadStream('./big.file');
  src.pipe(res);
});
```

**Project 2 - Video Streaming Server**

Can you use the same concepts we have discussed and use them to create a video streaming server? Take a movie file, read it as a stream, and pipe the response. On the client side, try using HTML5 video. You have to take care of the ranges if the user wants a specific part to be streamed.

## Node.js Handbook

- [Node.js Handbook](https://flaviocopes.com/books-dist/node-handbook.pdf)