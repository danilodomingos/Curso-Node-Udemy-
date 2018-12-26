let mysql = require("mysql");

module.exports = () => {

    return mysql.createConnection({
        host: 'mysql_dev',
        user: 'root',
        password: 'root123',
        database: 'portal_noticias'
    });
}