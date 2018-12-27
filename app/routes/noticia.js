module.exports = (app) => {

    app.get("/noticia", (req, res) => { 

        let connection = app.config.dbConnection();
        let model = app.app.models.noticia;

        model.getNoticia(connection, (error, result) => {
            res.render("noticias/noticia", {noticia:result});

        });
    });
}