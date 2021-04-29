var user = require ('../Models/user_model');

exports.userPage = (req, res) =>
{
    
      user.getAll().then((results) =>
        {
            res.json(results);
        });
}
   
exports.byUserId = (req, res) =>
{
    console.log(req.params.id)
    user.getOneById(req.params.id).then((results) =>
        {
            res.json(results);
        });
}

exports.byUserFirstnameAndLastname = (req, res) =>
{
    console.log('firstname and lastname' + req.params.firstname, req.params.lastname);
    user.getOneByFirstnameAndLastname(req.params.firstname, req.params.lastname).then((results) =>
        {
            res.json(results);
        });
}

