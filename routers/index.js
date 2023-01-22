const express = require('express');
const router = express.Router();//MW func

const controller = require('../controllers/index');

router.get('/signup',controller.signUp);
router.get('/signin',controller.signIn);
router.post('/create-account',controller.create_account);
router.post('/create-session',controller.create_account);

router.use('/home',require('./home_router.js'));
module.exports = router;