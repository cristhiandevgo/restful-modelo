let NeDB = require('nedb');
let db = new NeDB({
    filename: 'users.db',
    autoload: true
});

module.exports = (app)=>{
    app.get('/users', (req, res)=>{
        db.find({}).sort({name:1}).exec((err, users)=>{
            if(err){
                console.log(`Error: ${err}`);
                res.status(400).json({
                    error: err
                });
            }else{
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(
                    {
                        users
                    }
                );
            }
        });
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