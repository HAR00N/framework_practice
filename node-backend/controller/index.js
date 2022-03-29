/* mybatis $ npm i mybatis-mapper */
const mybatisMapper = require('mybatis-mapper');
mybatisMapper.createMapper(['./mybatis/testMapper.xml'])

/* mybatis query */
var format = {language: 'sql', indent: ' '}

/* mysql */
var mysql = require('../config/mysql/db');

module.exports = {
    getAll: function (req, res, next) {
        var param = {
            id : req.params.id
        }
        var query = mybatisMapper.getStatement('testMapper','getAll', param, format)
        mysql.query(query, (error, rows) => {
            console.log(rows);
            res.json(rows);
        })
    },

    getId: function (req, res, next) {
        var param = {
            id : req.params.id
        }
        var query = mybatisMapper.getStatement('testMapper','getId', param, format)
        mysql.query(query, (error, rows) => {
            console.log(rows);
            res.json(rows);
        })
    }
};