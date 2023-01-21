const express = require('express');//framework import(internally node.js use)
const app = express();//call func an express server create
const port = 8000;

app.listen(port,(error)=>{//said express server to listen server(system host) on port 8000
    if(error){
        console.log(err);return;
    }
    console.log('serve is running on port: 8000 ................');
})