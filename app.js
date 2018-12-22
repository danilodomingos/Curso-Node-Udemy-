var express = require("express");
var app = express();

app.set('view engine', 'ejs');

app.get("/", (req, res)=>{
    res.render("index");
});

app.get("/tecnologia", (req, res)=>{
    res.render("secao/tecnologia");
});

app.listen(3000, () => {
    console.log("Servidor rodando com o Express")
});