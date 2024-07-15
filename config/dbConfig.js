'use strict';

const mysql = require('mysql2/promise');

const dbConn = mysql.createPool({
  host: "103.228.83.115",
  user: "Kodiemysql",
  database: "task_management",
  password: "Cylsys@Kodie@2",
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

module.exports = dbConn;
