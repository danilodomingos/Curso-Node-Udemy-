module.exports = (app) => {

    return app.get("/", (req, res)=>{
        res.render("home/index");
    });
}

