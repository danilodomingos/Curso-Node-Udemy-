function Noticia(){};

Noticia.prototype.getNoticias = (connection, callback) =>
        connection.query('select * from noticias', callback);

Noticia.prototype.getNoticia = (connection, callback) =>
        connection.query('SELECT * FROM noticias WHERE id =1', callback);

Noticia.prototype.salvar = (noticia, connection, callback) =>
        connection.query('INSERT INTO noticias SET ?', noticia, callback);

module.exports = ()=> {

    return Noticia;
}