const mysql = require('mysql');
const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'taopiaopiao',
    port: 3306
})
module.exports=pool;