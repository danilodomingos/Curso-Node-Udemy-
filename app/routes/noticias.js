let dbConnection = require('../../config/dbConnection');

module.exports = (app) => {

    let connection = dbConnection();

    return app.get("/noticias", (req, res) => { 
        connection.query("select * from noticias", (error, result) => {
            res.render("noticias/noticias", {noticias:result});
        });

    });
}