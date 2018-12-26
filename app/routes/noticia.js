module.exports = (app) => {

    app.get("/noticia", (req, res) => { 

        let connection = app.config.dbConnection();
        
        connection.query("SELECT * FROM noticias WHERE id =1", (error, result) => {
            res.render("noticias/noticia", {noticia:result});

        });

    });
}