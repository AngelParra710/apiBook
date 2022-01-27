const mysql = require('mysql');

require('dotenv').config();

const config = {
    PORT: process.env.PORT,
}

const connection = mysql.createConnection({
    host : process.env.host,
    user : process.env.user,
    password : process.env.password,
    database : process.env.database
})


module.exports = {
    config,
    connection,
}