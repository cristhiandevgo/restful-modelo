let NeDB = require('nedb');
let db = new NeDB({
    filename: 'users.db',
    autoload: true
});

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

        db.insert(req.body, (err, user)=>{
            if(err){
                console.log(`Error: ${err}`);
                res.status(400).json({
                    error: err
                });
            }else{
                res.status(200).json(user);
            }
        });
    });
}