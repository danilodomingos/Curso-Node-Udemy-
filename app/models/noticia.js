module.exports = ()=> {

    this.getNoticias = (connection, callback) =>
        connection.query("select * from noticias", callback);
    
    
    this.getNoticia = (connection, callback) =>
        connection.query("SELECT * FROM noticias WHERE id =1", callback);

    return this;
}