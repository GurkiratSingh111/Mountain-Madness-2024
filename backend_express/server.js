const express = require('express')
const app = express()

//test
app.get("/api", (req, res) => {
    res.json({"key": "Value"} )
})

app.listen(5000, () => {console.log("Server has started on port 5000")})