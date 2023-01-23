const express = require('express');
const router = express.Router();//MW func

const controller = require('../controllers/index');
const passportLocalStrategy = require('../config/passport-local-strategy');

router.get('/signup',controller.signUp);
router.get('/signin',controller.signIn);
router.post('/create-account',controller.create_account);
router.post('/create-session',passportLocalStrategy.authenticate('local',{failureRedirect:"/signin"}),controller.create_session);

router.use('/home',passportLocalStrategy.checkAuthentication,require('./home_router.js'));
module.exports = router;