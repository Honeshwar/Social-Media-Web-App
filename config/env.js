const fs = require('fs');
const path = require('path');//morgan only as mw fun work and stored/fill log from req to this files, for that we wrote code main js file
// const rts = require('rotating-file-stream');//create log file,when full an file create new file transfer in it logs and again fill that current file , delete file if grew too much(we have to set constraints)
// //get path of directory where logs stores
// const logDirectory = path.join(__dirname,'../production_logs');
// fs.existsSync(logDirectory) || fs.mkdirSync(logDirectory);//check if directory not exist  that create new directory

// //user access our website
// const accessLogStream = rfs('access.log',{//access.log=name of file in which logs get stored
//     interval:'1d',//one day
//     path:logDirectory
// });

let development = {
//index.js (main)
    name:'development',
    assets_path:'./assets',
    session_secret:"XAZRDoHrixhvxMJj0GBkkkRm6u3lJMEG",
//passport jwt , api
    jwt_secret:"y48fvZYKEsdlGwHpLvqI5VbqqdRBMWXR",
//passport google
    google_client_id:"850782517174-40ebe3hmcpkcgb1d7komn7hfo67ho2r4.apps.googleusercontent.com",
    google_client_secret:"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",
    google_call_back_url:"http://localhost:8000/auth/google/callback",

// passport github
    github_client_id:"7e2d7761c00e7655b1bb",
    github_client_secret:"1452405d7d3da67a2dc3f7b2962b6d84727f3d80",
    github_call_back_url:"http://localhost:8000/auth/github/callback",

//smtp obj in nodemailer
    smtp:{
        service:"gmail",
        host:'smtp.gmail.com',
        port:587,//protocol  port . TLS = 587
        secure:false,
        auth:{// remotely access nodemailer our(pass , gmail and password) gmail and send from our gmail an email to users 
            user:"forprojext517@gmail.com",
            pass:"vagdfxsoomuileoz"//"wlljrtecnxlbhwsd"

        } 
    },
//mongoose
    db:'CODE_SOCIAL_DEVELOPMENT',
    // morgan:{
    //     mode:'dev',
    //     options:{stream:accessLogStream}
    // }

}

let production = {
    name:'production',
    db:process.env.CODIAL_DB,
    assets_path:process.env.CODIAL_ASSETS_PATH,
    session_secret:process.env.CODIAL_SESSION_SECRET,
    jwt_secret:process.env.CODIAL_JWT_SECRET,
    google_client_id:process.env.CODIAL_GOOGLE_CLIENT_ID,
    google_client_secret:process.env.CODIAL_GOOGLE_CLIENT_SECRET,
    google_call_back_url:process.env.CODIAL_GOOGLE_CALL_BACK_URL,
    smtp:{
        service:"gmail",
        host:'smtp.gmail.com',
        port:587,//protocol  port . TLS = 587
        secure:false,
        auth:{// remotely access nodemailer our(pass , gmail and password) gmail and send from our gmail an email to users 
            user:process.env.CODIAL_GMAIL_USERNAME,
            pass:process.env.CODIAL_GMAIL_PASSWORD//"wlljrtecnxlbhwsd"

        }
    },
    // morgan:{
    //     mode:'combine',
    //     options:{stream:accessLogStream}
    // }
   
}
console.log(process.env.CODIAL_ENVIRONMENT ,process.env.CODIAL_JWT_SECRET,process.env.CODIAL_ASSETS_PATH,9 );

module.exports = development; //eval(process.env.CODIAL_ENVIRONMENT) == undefined ? development :eval(process.env.CODIAL_ENVIRONMENT);