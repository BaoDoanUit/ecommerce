const express = require("express");
const router = express.Router();

const {list} = require("../controllers/demo");

router.get('/demos', list);

module.exports =  router