const express = require('express');
const router = express.Router();

const {signup, SayHi, signin} = require('../controllers/user');
const {userSignupValidator} = require('../validator/index')
//router

//Get

router.post('/signup',userSignupValidator, signup);
router.post('/signin', signin);
router.get('/', SayHi)

module.exports = router;