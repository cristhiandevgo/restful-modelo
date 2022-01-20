module.exports = app=>{
    app.get('/', (req, res)=>{
        res.statusCode = 200; // Código de página OK
        res.setHeader('Content-Type', 'text/html');
        res.end('<center>Página Home</center>');
    });
};