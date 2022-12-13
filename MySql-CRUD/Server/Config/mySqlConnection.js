const mysql = require('mysql2');
require("dotenv").config();

const HOST = process.env.HOST
const USER = process.env.USER
const PASSWORD = process.env.PASSWORD
const DATABASE = process.env.DATABASE

const mySqlConnection = mysql.createConnection({
    host: HOST,
    user: USER,
    password: PASSWORD,
    database: DATABASE,
})

 mySqlConnection.connect((err, conn) => {
    if (conn) {
        console.log('mySql database connection established')
    }
    if (err) {
        console.log('mySql connection error'+ JSON.stringify(err,undefined, 2));
    }
})

module.exports = mySqlConnection