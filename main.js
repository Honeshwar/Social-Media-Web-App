//to use every library in express app we will have to tell  express app to use it(import+use),alone import not work 
const express = require('express');//framework import(internally node.js use)
const app = express();//call func an express server create
const port = 8000;
//------------
const db = require('./config/database_connection');
//------------

//------------
//help to parser / to encode come request and create an body in req that contain payload,req not automatically structured(JUST KEU:VALUE),library json parser body parser , inbuilt in express that we use
app.use(express.urlencoded({extended:false}));
//------------

//------------ same like above but for cookie ,it parser cookie from req to req.cookie
const cookie = require('cookie-parser');
app.use(cookie());
//------------


 
//------------ it create cookie for login time
const session = require('express-session');

//------------ an such library that use to store automatically session in db(auto  create schema than its model in db)
// use library: to connect anyone to mongo
const storeSessionInMongodb = require('connect-mongo');
const MongoStore = storeSessionInMongodb(session);//we tell here what we have to connect ,session connect,pass session
//we have to tell connect mongo that we want to connect(store) session  to mongodb, than use in session func. below
//------------


app.use(session({
    name:"user_token",
    secret:'hello',//decrypt use
    saveUninitialized:false,//cookie Uninitialized not save it()
    resave:false,//server to client
    cookie:{
        maxAge:(1000_6000_10000)
    },
    store: new  MongoStore({
        mongooseConnection:db,
        autoRemove:'disabled'
    },function(err){
        if(err){console.log("error while storing session in mongodb bu connect mongo");
        console.log("************connect-mongo is connect and storing session cookie**********");
    }
    })
    

}))
//------------

//------------MW call by express set user to locals use in ejs files
//initialize (interpret) when app run
const passport = require('./config/passport-local-strategy');
 require('./config/password-google-oauth2-strategy');
 require('./config/password-github2-strategy')
// add MW for Passport 
app.use(passport.initialize()); 
app.use(passport.session());
app.use(passport.setAuthenticatedUser);
//------------

//------------
//connect flash
const flash = require('connect-flash');
const Flash_MW = require('./config/flash-middleware');

//always use flash , tell to express to use flash in express app
app.use(flash());
// console.log(flash,"***********",flash()());
app.use(Flash_MW.setFlash);
// console.log(Flash_MW);
//------------

// sass use
// const sassMW = require('node-sass-middleware');
// app.use(sassMW({
//     src:'./assets/scss',
//     dest:'./assets/css',
//     debug:true,
//     prefix:'/css',
    
// }));

//------------
console.log(express.static('./assets'));
app.use(express.static('./assets'));
//------------

//------------
const expEjsLayout = require('express-ejs-layouts');
app.use(expEjsLayout);
// extract any style and script encounter at file while rendering it extract it and  put in <%-style-%> syntax
app.set("layout extractStyles",true);
app.set("layout extractScripts",true);
//------------

//------------
//set up ejs
app.set('view engine','ejs');//tell app to use ejs as view engine
app.set('views','./views')//set up path to views to render file,tell express to take file when view engine need from this path
//------------

//------------
//set up router
app.use("/",require('./routers/index.js'));//any router/url req come directly do to this router
//------------


app.listen(port,(error)=>{//said express server to listen server(system host) on port 8000
    if(error){
        console.log(err);return;
    }
    console.log('serve is running on port: 8000 ................');
}); 