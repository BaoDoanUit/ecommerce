const express = require("express");
const router = express.Router();

const { authenticate } = require('../controllers/authenticate')
//router

router.post("/get-token", authenticate);

module.exports = router;