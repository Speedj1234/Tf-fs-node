var actors = require ('../Models/actors_model');

class Actor
{
    id;
    first_name;
    last_name;


    constructor(data)
    {
        this.id = data.id;
        this.first_name = data.first_name;
        this.last_name = data.last_name;
    }
}
// exports.getAll = (req, res) =>
// {

// }

exports.getAll = (req, res) =>
{
    actors.getAll().then ((results) =>
    {
        res.json(results);
    });
}

exports.getById = (req, res) =>
{
    console.log(req.params.id)
    actors.getOneById(req.params.id).then((results) =>
        {
            res.json(results);
        });
}

exports.getByFirstnameAndLastname = (req, res) =>
{
    console.log('first_name and last_name ' + req.params.first_name, req.params.last_name);
    user.getOneByfirst_nameAnd(req.params.first_name, req.params.last_name).then((results) =>
        {
            res.json(results);
        });
}


exports.createACtor = (req, res) =>
{
    try
    {
        var actor = new Actor(req.body);
        actors.insertActor(actor);
        actors.getAll().then ((results) =>
        {
            res.json(results);
        });
    } catch (err)
    {
        res.status(500).send(err);
    }
}

exports.deleteActor = (req, res) =>
{
    try
    {
        actors.deleteActorById(req.params.id)
        actors.getAll().then ((results) =>
        {
            res.json(results);
        });
    }

    catch(err)
    {
        res.status(500).send(err);
    }

}

exports.updateActor = (req, res) =>
{
    try
    {
        var actor = new Actor(req.body);
        actors.updateActorById(req.params.id, actor);
        actors.getAll().then ((results) =>
        {
            res.json(results);
        });
    }

    catch(err)
    {
        res.status(500).send(err);
    }
}
   





