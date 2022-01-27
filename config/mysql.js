const { connection } = require('./server')
const util = require('util')
const query = util.promisify(connection.query).bind(connection)

//const getLibros = 'SELECT * FROM libros'
const getLibros = async () => {
    connection.connect();
    const data = await query('SELECT * FROM libros');
    connection.end();
    return data
}

const insertLibros = async ( data = {} ) => {
    connection.connect();
    const result = await query(`INSERT INTO libros (title, author, content, content_short, publisher_date, pages, language, url_download, thumbnail, idcategoria ) 
    VALUES ('${data.title}', '${data.author}', '${data.content}', '${data.contenshort}', "${data.publisherdate}", ${data.pages}, '${data.language}', '${data.urldonwload}', '${data.thumbmail}', '${data.idCategoria}')`);
    connection.end()
    console.log(result)
}

const getLibrosbyName = 'SELECT * FROM libros WHERE titulo ='
module.exports = {
    connection,
    getLibros,
    insertLibros,
    getLibrosbyName,
}

