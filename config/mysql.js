const { connection } = require('./server')
const util = require('util')
const query = util.promisify(connection.query).bind(connection)

//const getLibros = 'SELECT * FROM libros'
const getLibros = async () => {
    const data = await query('SELECT * FROM libros');
    return data
}

const insertLibros = async ( data = {} ) => {
    const result = await query(`INSERT INTO libros (title, author, content, content_short, publisher_date, pages, language, url_download, thumbnail, idcategoria ) 
    VALUES ('${data.title}', '${data.author}', '${data.content}', '${data.contenshort}', "${data.publisherdate}", ${data.pages}, '${data.language}', '${data.urldonwload}', '${data.thumbmail}', '${data.idCategoria}')`);
    console.log(result)
}

const insertCategoria = async ( data= {} ) => {
    const result = await query(`INSERT INTO categorias (categoria, descripcion) VALUES ('${data.categoria}', '${data.descripcion}')`);
    console.log(result)
}

const getCategoria = async () => {
    const result = await query('SELECT * FROM categorias');
    return result;
}

const getLibrosbyName = 'SELECT * FROM libros WHERE titulo ='
module.exports = {
    connection,
    getLibros,
    insertLibros,
    insertCategoria,
    getCategoria,
    getLibrosbyName,
}

