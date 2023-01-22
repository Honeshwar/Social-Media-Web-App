//to use every library in express app we will have to tell  express app to use it(import+use),alone import not work 
const express = require('express');//framework import(internally node.js use)
const app = express();//call func an express server create
const port = 8000;

// sass use
// const sassMW = require('node-sass-middleware');
// app.use(sassMW({
//     src:'./assets/scss',
//     dest:'./assets/css',
//     debug:true,
//     prefix:'/css',
    
// }));
console.log(express.static('./assets'));
app.use(express.static('./assets'));

const expEjsLayout = require('express-ejs-layouts');
app.use(expEjsLayout);
// extract any style and script encounter at file while rendering it extract it and  put in <%-style-%> syntax
app.set("layout extractStyles",true);
app.set("layout extractScripts",true);

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
}); 