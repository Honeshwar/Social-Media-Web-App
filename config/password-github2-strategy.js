//can do use all strategy in single file because all need serializze,deseri,....,.use(change)
//use as MW for authentication

const passport = require('passport');
const GithubStrategy = require('passport-github2').Strategy;
const crypto = require('crypto');
const Users = require('../models/users');

 const env = require('./env');
 
//tell passport to use google oauth strategy
passport.use(new GithubStrategy({
    // MATCH with google send data to browser
    clientID:env.github_client_id,
    clientSecret:env.github_client_secret,
    callbackURL:env.github_call_back_url,
    scope: ['user:email'],
    },function(accessToken,refreshToken,profile,done){
        console.log(profile.emails[0].value);
        //find user
        Users.findOne({email:profile.emails[0].value},function(err,user){
            if(err){console.log(err,"error in finding user by email that provide by github strategy");return;}

            
            //if found,set this user as req.user
            if(user){
                console.log("set this user as req.user in github auth code ",user,profile.emails[0].value);
                return done(null,user);// directly passport do serialize user because passport get user,serialize fun set at local strategy call
                //user an array inside it obj = user,find() an array return user[0],find one an obj return
            }else{
                 //if not found, create user in collection/model and set it as req.user,pass to req
                Users.create({
                    name:profile.displayName,
                    email:profile.emails[0].value,
                    password:crypto.randomBytes(20).toString('hex')//a - f and 0 - 9, 20=length of byte
                },function(err,user){
                    if(err){console.log(err,"error in creating user that provide by google strategy");return;}

                    return done(null,user);//et user to req.users
                });
            }
        });
}));



module.exports = passport;
