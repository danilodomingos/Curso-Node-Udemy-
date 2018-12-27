module.exports = (app) => {

    app.get("/noticias", (req, res) => { 

        let connection = app.config.dbConnection();
        let model = app.app.models.noticia;

        model.getNoticias(connection, (error, result) => {
            res.render("noticias/noticias", {noticias:result});
        });
        
    });
}