const express = require('express');
const router = express.Router();//MW func

const controller = require('../controllers/index');

router.get('/signup',controller.signUp);
router.get('/signin',controller.signIn);
module.exports = router;