const formidable = require('formidable')
// const excel = require("node-xlsx")
const fs = require("fs")
const path = require("path")
const res = require('express/lib/response')
const AppDAO = require('./DAO.js')

const data = [
    {
        "id": 1
    },
    {
        "id": 2
    },
    {
        "id": 3
    },
]

const dao = new AppDAO('./database.sqlite3')

exports.list = (req, res) => {

    res.json(data)

}

exports.upload = async (req, res) => {
    await import_excel(req, res, executeFile('demo'));
    return res.status(201);
}

exports.readSqlite = async (req, res) => {
    const data = await readData();
    return res.json(data);
}

exports.createdTable = async (req, res) => {
    await createTable();
    return res.json(data);
}

exports.insertNewLog = async (req, res) => {
    const log = req.body.log || 'new test'
    console.log(log);
    await insert(log);

    const data = await readData();
    return res.json(data);
}

const readData = () => {
    return dao.all(`SELECT * FROM projects`)
}


const createTable = () => {   //Hàm tạo bảng này sẽ dùng để tạo ra cấu trúc bảng projects nếu trong file csdl sqlite3 chưa có bảng này.
    const sql = `
    CREATE TABLE IF NOT EXISTS projects (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT)`
    console.log(`create table ${sql}`);
    dao.runquery(sql)
}

const insert = (data) => {
    dao.runquery(`INSERT INTO projects (name) VALUES (?)`,  [data])
}

const executeFile = (type) => {
    res.write('received upload:\n\n');
}

const import_excel = (req, res, next) => {
    // var user_name = '';
    // var fileName = '';
    // var uploadedPath = '';
    // var fileTypeError = false;
    // var form = new formidable.IncomingForm({
    //     encoding: 'utf-8',
    //     keepExtensions: true,
    //     maxFieldsSize: 10 * 1024 * 1024,
    // });

    // form.on('field', function (field, value) {
    //     if (field == 'user_name') {
    //         user_name = value;
    //     }
    // });

    // form.on('file', function (field, file) {
    //     fileName = file.name;
    //     uploadedPath = file.path
    //     if (file.type != 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet') {
    //         fileTypeError = true;
    //     }
    // });

    // form.on('end', async function () {
    //     var obj = excel.parse(uploadedPath);
    //     var excelObj = obj[0].data;
    //     console.log('before parse array')
    //     console.log(obj[0].data);
    //     var mac_array = [];
    //     for (var i in excelObj) {
    //         var value = excelObj[i];
    //         for (var j in value) {
    //             mac_array.push(value[j]);
    //         }
    //     }
    //     console.log(mac_array);
    // });

    // form.on('error', function (err) {
    //     res.send({ ret_code: -1, ret_msg: 'FAILED', extra: "上传出错" });
    // });


    // form.on('aborted', function () {
    //     res.send({ ret_code: -1, ret_msg: 'FAILED', extra: "放弃上传" });
    // });

    // form.parse(req);
}