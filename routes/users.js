const req = require('express/lib/request');
let NeDB = require('nedb');
let db = new NeDB({
    filename: 'users.db',
    autoload: true
});

module.exports = (app)=>{

    let route = app.route('/users');

    route.get((req, res)=>{
        db.find({}).sort({name:1}).exec((err, users)=>{
            if(err){
                app.utils.error.send(err, req, res);
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

    route.post((req, res)=>{

        if(!app.utils.validator.user(app, req, res)) return false;

        db.insert(req.body, (err, user)=>{
            if(err){
                app.utils.error.send(err, req, res);
            }else{
                res.status(200).json(user);
            }
        });
    });

    let routeId = app.route('/users/:id');

    routeId.get((req, res)=>{
        db.findOne({_id:req.params.id}).exec((err, user)=>{
            if(err){
                app.utils.error.send(err, req, res);
            }else{
                res.status(200).json(user);
            }
        });
    });

    routeId.put((req, res)=>{

        if(!app.utils.validator.user(app, req, res)) return false;

        db.update({_id:req.params.id}, req.body, err => {
            if(err){
                app.utils.error.send(err, req, res);
            }else{
                res.status(200).json(obj.assign(req.body, req.params));
            }
        });
    });

    routeId.delete((req, res)=>{
        db.remove({_id:req.params.id}, {}, err => {
            if(err){
                app.utils.error.send(err, req, res);
            }else{
                res.status(200).json(req.params);
            }
        });
    });


    /*
    NeDB info

    Nedb.insert
    Insert a new document

    Nedb.find
    Find all documents matching the query

    Nedb.update
    Update all docs matching query v1.7.4 and prior signature.

    Nedb.findOne
    Find one document matching the query

    Nedb.remove
    Remove all docs matching the query

    */
}