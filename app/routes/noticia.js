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

        req.assert('titulo', 'Título é obrigatório').notEmpty();
        req.assert('resumo', 'Resumo é obrigatório').notEmpty();
        req.assert('resumo', 'Resumo deve conter entre 10 e 100 caracteres').len(10,100);
        req.assert('autor', 'Autor é obrigatório').notEmpty();
        req.assert('data_noticia', 'Data é obrigatório').notEmpty();
        req.assert('noticia', 'Notícia é obrigatório').notEmpty();

        let erros = req.validationErrors();

        if(erros){
            res.render('admin/form_add_noticia')
            return;
        }

        let connection = application.config.dbConnection();
        let model = new application.app.repository.noticia; 

        model.salvar(noticia, connection, (error, result)=>{
            res.redirect("/noticias");
        });
    });

}