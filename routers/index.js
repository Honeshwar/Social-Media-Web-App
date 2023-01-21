const express = require('express');
const router = express.Router();//MW func

const controller = require('../controllers/index');

router.get('/signup',controller.signUp);

module.exports = router;