const { config } = require('./config/server')
const mysql = require('./config/mysql')
const express = require('express');
const cors = require('cors');
const { json } = require('body-parser');
const app = express();
//Middlewares
app.use(cors())
app.use(express.json())
//Peticiones get

//
app.get('/', (req, res) => {
    res.send('<h1>Bienvenido</h1>');
});
//Solicitar todos los libros disponibles
app.get('/libros',  async (req, res) => {
    const { getLibros } = mysql
    const data = await getLibros();
    console.log(data)
    res.status(200).json(data)
})
//Solicitar libros por nombre
app.get('/libros/:nombre', (req, res) => {
    const { connection, getLibrosbyName } = mysql;
    connection.connect();
    connection.query(`${getLibrosbyName}'${req.params.nombre}'`, (err, result, field) => {
        if(!err){
            console.log(result)
            res.status(200).json(result)
        }
        else{
            console.log(err)
        }
    })
    connection.end();
});
//Insertar libros
app.post('/libros/add', async (req, res) => {
    const { insertLibros } = mysql;
    const libro = { 
        title: req.body.title,
        author: req.body.author,
        content: req.body.content,
        contenshort: req.body.contenshort,
        publisherdate: req.body.publisherdate,
        pages: req.body.pages,
        language: req.body.language,
        urldonwload: req.body.urldonwload,
        thumbmail: req.body.thumbmail,
        idCategoria: req.body.idCategoria,
    }
    //console.log(libro)
    const data = await insertLibros(libro);
    res.status(200).send('Guardado')
});
//Inicializzar puerto
app.listen(config.PORT, () => {
    console.log('Funcionando en puerto: ' + config.PORT)
})