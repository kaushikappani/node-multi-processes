const express = require("express");
const { fork } = require("child_process");
const app = express();
app.get("/", (req, res) => {
    res.send("res")
})
app.get("/:num", (req, res) => {
    const childProcess = fork("./isPrime.js");
    childProcess.send({ num: parseInt(req.params.num) })
    childProcess.on("message", msg => {
        res.send({
          num: req.params.num,
          isprime: msg,
        });
    })
    
})

app.listen(3000);