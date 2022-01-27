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

connection.connect(error => {
    if(error) throw error
    console.log('Database Running')
})

module.exports = {
    config,
    connection,
}