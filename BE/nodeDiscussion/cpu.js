const express = require('express');
const cors = require('cors');
const app = express();
const {fork} = require("child_process");
const path = require('path');
app.use(cors());

app.get('/fib', (req, res) => {
  const { number, requestNumber } = req.query;
  console.log("handler fn ran for req", requestNumber);
  if (!number || isNaN(number) || number <= 0) {
    return res.status(400).json({ error: 'Please provide a valid positive number.' });
  }
  const fiboRes = fork(path.join(__dirname,'fibWorker.js'));
  //hw write a code to calclate fib41 using 2 child process. 
  fiboRes.send({number: parseInt(number, 10),data: "hello"});
  fiboRes.on("message", (answer) => {
    res.status(200).json({
      status: "success",
      message: answer,
      requestNumber
    });
    fiboRes.kill();
  })
  
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
