module.exports = (app)=>{
    app.get('/users', (req, res)=>{
        res.statusCode = 200;
        res.json(
            {
                users:[{
                    idUser: '1',
                    name: 'Cristhian',
                    age: '30'
                }],

                course:[{
                    idCourse: '1',
                    name: 'Engenharia de Computação',
                    college: 'UniEVANGÉLICA'
                }]
            }
        );
    });

    app.post('/users/admin', (req, res)=>{
        res.json(req.body);
    });
}