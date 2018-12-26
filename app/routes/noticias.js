module.exports = (app) => {


    return app.get("/noticias", (req, res) => {

        let mysql = require("mysql");
        let connection = mysql.createConnection({
            host: 'mysql_dev',
            user: 'root',
            password: 'root123',
            database: 'portal_noticias'
        });

        connection.query("select * from noticias", (error, result) => {
            res.send(result);
        });

        //res.render("noticias/noticias");
    });
}