const fetch = require('node-fetch')
const express = require('express')

const app = express()

app.get("/", (req,res) =>{
    res.send({"test":"it works"})
})

app.listen(42069, ()=>{
    console.log("> online")
})
