module.exports = ()=> {

    this.getNoticias = (connection, callback) =>
        connection.query('select * from noticias', callback);
    
    
    this.getNoticia = (connection, callback) =>
        connection.query('SELECT * FROM noticias WHERE id =1', callback);
    
    this.salvar = (noticia, connection, callback) =>
        connection.query('INSERT INTO noticias SET ?', noticia, callback);

    return this;
}