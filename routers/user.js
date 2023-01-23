const express = require('express');
const router = express.Router();//MW func

const userController = require('../controllers/user_controller');
router.get('/signout',userController.sign_out);
module.exports = router;