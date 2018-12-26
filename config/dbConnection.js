let mysql = require("mysql");

let connMySQL = () => {
    return mysql.createConnection({
        host: 'mysql_dev',
        user: 'root',
        password: 'root123',
        database: 'portal_noticias'
    });
}

module.exports = () =>  connMySQL;    
