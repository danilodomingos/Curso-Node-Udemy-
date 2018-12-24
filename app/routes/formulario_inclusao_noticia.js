module.exports = (app) => {
    
    return app.get("/formulario-inclusao-noticia", (req, res)=>{
        res.render("admin/form_add_noticia");
    });

}