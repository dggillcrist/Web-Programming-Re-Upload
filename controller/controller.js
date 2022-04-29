const dao = require('../model/indexMongoDAO');

exports.getAll = async function(req,res)
{
    res.status(200); // 200 = Ok
    res.send(await dao.readAll()); 
    res.end(); 
}

exports.get = function(req,res)
{ //REST get (one) method
    //URL parameter always on req.params.<name>
    let id = req.params.id; //get param and convert to int
    let found = dao.read(id);

    if(found !== null)
    {
        res.status(200); //200 = OK
        res.send(found); 
    }
    else
    { 
        res.status(404); //404 = Not Found
        res.send({msg:'ERROR: PLAN NOT FOUND'}); //send a message
    }
    res.end(); //ends the response (only 1 end per response)
}

exports.postCreateOrUpdate = function(req,res)
{
    let newPlan = {}; //empty obj
    //newPlan.id = _id;
    newPlan.txt_name = req.body.txt_name;
    newPlan.mile = req.body.mile;
    newPlan.hundred = req.body.hundred;
    newPlan.maxDL = req.body.maxDL;
    newPlan.pushups = req.body.pushups;
    newPlan.timeline = req.body.timeline;
    newPlan.caloricGoal = req.body.caloricGoal;

    let id = req.body._id;
    console.log(id);
    //if(req.body.txt_id);
    if(id)
    {
        newPlan._id = id;
        console.log('Update plan');
        dao.update(newPlan);
        
    }
    else
    {
        dao.create(newPlan);        
    }
    res.redirect('index.html');
}

exports.deleteOne = async function(req,res)
{
    //URL parameter always on req.params.<name>
    let id = req.params._id; //get param and convert to int    
    console.log(id);
    await dao.del(id);
    
    res.redirect('../index.html');
}
