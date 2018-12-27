module.exports = (application) => {
    
    application.get("/formulario-inclusao-noticia", (req, res)=>{
        res.render("admin/form_add_noticia");
    });
}