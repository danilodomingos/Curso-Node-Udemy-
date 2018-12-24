module.exports = (app) => {

    return app.get("/noticias", (req, res)=>{
        res.render("noticias/noticias");
    });
}