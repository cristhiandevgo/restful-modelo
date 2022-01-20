let express = require('express');
let routes = express.Router();

routes.get('/', (req, res)=>{
    res.statusCode = 200; // Código de página OK
    res.setHeader('Content-Type', 'text/html');
    res.end('<center>Página Home</center>');
});

module.exports = routes;