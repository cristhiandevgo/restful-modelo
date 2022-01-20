let express = require('express');
const { route } = require('.');
let routes = express.Router();

routes.get('/', (req, res)=>{
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

routes.get('/admin', (req, res)=>{
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');

    res.json({
        admins: [{
            name: 'Admin1',
            level: '1'
        }]
    });
})

module.exports = routes;