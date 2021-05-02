var demo = require ('../Models/demo_model');

exports.demoPage = (req, res) =>
{
    
      demo.getAll().then((results) =>
        {
            res.json(results);
        });
}
   
exports.byId = (req, res) =>
{
    console.log(req.params.id)
    demo.getOneById(req.params.id).then((results) =>
        {
            res.json(results);
        });
}

exports.byIdAndNbr = (req, res) =>
{
    console.log('id and nbr' + req.params.nbr);
    demo.getOneByIdAndNbr(req.params.id, req.params.nbr).then((results) =>
        {
            res.json(results);
        });
}

