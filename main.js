const express = require('express');//framework import(internally node.js use)
const app = express();//call func an express server create
const port = 8000;

//sass use
const sassMW = require('node-sass-middleware');
app.use(sassMW({
    src:'./assets/scss',
    dest:'./assets/css',
    debug:true,
    prefix:'/css',
    
}));

//set up ejs
app.set('view engine','ejs');//tell app to use ejs as view engine
app.set('views','./views')//set up path to views to render file,tell express to take file when view engine need from this path

//set up router
app.use("/",require('./routers/index.js'));//any router/url req come directly do to this router



app.listen(port,(error)=>{//said express server to listen server(system host) on port 8000
    if(error){
        console.log(err);return;
    }
    console.log('serve is running on port: 8000 ................');
})