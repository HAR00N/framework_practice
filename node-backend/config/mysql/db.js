/* MySQL setting*/
var mysql = require('mysql2')
var connection = mysql.createConnection({
  host : '127.0.0.1',
  port : '3306',
  user : 'root',
  password : 'dainls123',
  database : 'resource_demo'
});

module.exports = connection;