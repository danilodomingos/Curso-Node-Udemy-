module.exports = (application) => {

    application.get("/noticias", (req, res) => { 

        let connection = application.config.dbConnection();
        let model = new application.app.repository.noticia;

        model.getNoticias(connection, (error, result) => {
            res.render("noticias/noticias", {noticias:result});
        });
        
    });

    application.get("/noticia", (req, res) => { 

        let connection = application.config.dbConnection();
        let model = new application.app.repository.noticia;

        model.getNoticia(connection, (error, result) => {
            res.render("noticias/noticia", {noticia:result});
        });
    });

    application.post("/noticias/salvar", (req, res)=>{
        
        let noticia = req.body;
        let connection = application.config.dbConnection();
        let model = new application.app.repository.noticia; 

        model.salvar(noticia, connection, (error, result)=>{
            res.redirect("/noticias");
        });
    });

}