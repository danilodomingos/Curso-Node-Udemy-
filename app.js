let app = require("./config/server");

let rotaNoticias = require('./app/routes/noticias')(app);
let rotaHome = require('./app/routes/home')(app);
let rotaInclusaoNoticias 
    = require('./app/routes/formulario_inclusao_noticia')(app);






app.get("/tecnologia", (req, res)=>{
    res.render("secao/tecnologia");
});

app.listen(3000, () => {
    console.log("Server ON");
});