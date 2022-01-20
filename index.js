const express = require('express');

let app = express();

app.get('/', (req, res)=>{
    res.statusCode = 200; // Código de página OK
    res.setHeader('Content-Type', 'text/html');
    res.end('<center>Página Home</center>');
});

app.get('/users', (req, res)=>{
    res.statusCode = 200; // Código de página OK
    res.setHeader('Content-Type', 'application/json');
    res.json({
        users: [{
            name: 'Cristhian',
            email: 'cristhian@cristhian.com',
            idade: '30',
            id: 1
        }],
        curso: [{
            nomeCurso: 'Engenharia de Computação',
            situacao: 'Concluído'
        }]
    });
});


app.listen(3000, '127.0.0.1', ()=>{
    console.log('Servidor Rodando...');
});