const express = require('express');
const { spawn } = require('child_process');
const cors = require('cors')

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.use(cors())

app.post('/', (req, res) => {
  const data = req.body.image; 
  console.log(data);
  const arr = []

  const pythonProcess = spawn('python', ['predict.py', '8cbcb762ad3be880.jpg']);
  pythonProcess.stdout.on('data', (data) => {
    const pythonResponse = data.toString();
    arr.push(pythonResponse)
    if (pythonResponse == "Healthy")
        res.send(pythonResponse);
  });

  pythonProcess.on('close', (code) => {
    console.log(`Python script exited with code ${code}`);
    console.log(arr)
    res.send(arr.pop())
  });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});