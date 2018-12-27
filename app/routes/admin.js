module.exports = (app) => {
    
    app.get("/formulario-inclusao-noticia", (req, res)=>{
        res.render("admin/form_add_noticia");
    });

    app.post("/noticias/salvar", (req, res)=>{
        res.send(req.body);
    });

}