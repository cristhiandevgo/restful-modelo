const http = require('http');

let server = http.createServer((req, res)=>{
    console.log('METHOD: ' + req.method);
    console.log('URL: ' + req.url);

    switch (req.url) {
        case '/':
            res.statusCode = 200; // Código de página OK
            res.setHeader('Content-Type', 'text/html');
            res.end('<center>Home</center>');
            break;
        
        case '/users':
            res.statusCode = 200; // Código de página OK
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify({
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
            }));
            break;
        default:
            break;
    }
});

server.listen(3000, '127.0.0.1', ()=>{
    console.log('Servidor Rodando...');
});