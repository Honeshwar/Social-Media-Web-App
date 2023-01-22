const express = require('express');
const router = express.Router();//MW func

const homeController = require('../controllers/home_controller');
router.use('/',homeController.home);
module.exports = router;