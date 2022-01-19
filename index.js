const http = require('http'); // Carregando módulo

let server = http.createServer((req, res)=>{ // Criou o servidor. req = solicitações / res = respostas
    console.log('URL: ' + req.url);
    console.log('METHOD: ' + req.method);

    res.end('OK');
});

// Fico ouvindo Porta / IP / Função callback
server.listen(3000, '127.0.0.1', ()=>{
    console.log('Servidor Rodando...');
});
