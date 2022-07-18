const express = require("express");
const router = express.Router();
const bodyParser = require('body-parser')
const excelParser = bodyParser.raw({
    type: 'application/octet-stream'
})
const { list, upload, readSqlite, insertNewLog } = require("../controllers/demo");

router.get('/demos', list);
router.post('/upload', excelParser, upload)
router.get('/readSqlite', readSqlite);
router.post('/insertlog', insertNewLog);

module.exports = router