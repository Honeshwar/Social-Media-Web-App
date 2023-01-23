const express = require('express');
const router = express.Router();//MW func

const controller = require('../controllers/index');
const passport = require('passport');

router.get('/',passport.checkAuthentication,controller.home);
router.get('/signup',controller.signUp);
router.get('/signin',controller.signIn);
router.post('/create-account',controller.create_account);
router.post('/create-session',passport.authenticate('local',{failureRedirect:"/signin"}),controller.go_to_home);


//for sign out
// router.get("/signOut",controller.destroySession);


//google auth for user
router.get('/auth/google',passport.authenticate('google',{scope:['profile','email'],session:false}));//passport give this url to use popup window open req to google server and pass data that define scope to callback url
router.get('/auth/google/callback',passport.authenticate('google',{failureRedirect:'/signin'}),controller.go_to_home);//create session for google oauth2
//get data go to home url
//don't forget to use that auth on main .jd file to load it 

//after google check use an url hit in browser by google that is cb url --> server --- check user own db -- action--home (FE)


//github2 auth for user
router.get('/auth/github',passport.authenticate('github',{scope:["user:email"]}));//passport give this url to use popup window open req to github server and pass data that define scope to callback url
router.get('/auth/github/callback',passport.authenticate('github',{failureRedirect:'/signin'}),controller.go_to_home);//create session for github oauth2

router.use('/user',require('./user.js'));
module.exports = router;