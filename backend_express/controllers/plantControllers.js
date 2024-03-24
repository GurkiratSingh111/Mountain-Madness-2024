const { spawn } = require('child_process');

const getPlantCondition = async (req,res) => {
    try{
        const arr = []
        const pythonProcess = spawn('python', ['predict.py', '8cbcb762ad3be880.jpg']);

        pythonProcess.stdout.on('data', (data) => {
            const pythonResponse = data.toString();
            arr.push(pythonResponse)
        });

        pythonProcess.on('close', (code) => {
            console.log(`Python script exited with code ${code}`);
            console.log(arr)
            res.send(arr.pop())
        });
    }
    catch(err){
        console.log(err)
        res.status(500).send(err)
    }
}

module.exports = {
    getPlantCondition
}