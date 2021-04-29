var films = require ('../Models/film_model');

class Film
{
    id;
    title;
    description;
    annee_sortie;


    constructor(data)
    {
        this.id = data.id;
        this.title = data.title;
        this.description = data.description;
        this.annee_sortie = data.annee_sortie;
    }
}


exports.getAll = (req, res) =>
{
   films.getAll().then ((results) =>
    {
        res.json(results);
    });
}

exports.getById = (req, res) =>
{
    console.log(req.params.id)
    films.getOneById(req.params.id).then((results) =>
        {
            res.json(results);
        });
}


exports.createFilm = (req, res) =>
{
    try
    {
        var film = new Film(req.body);
        films.insertFilm(film);
        films.getAll().then ((results) =>
        {
            res.json(results);
        });
    } catch (err)
    {
        res.status(500).send(err);
    }
}

exports.deleteFilm = (req, res) =>
{
    try
    {
        films.deleteFilmById(req.params.id)
        films.getAll().then ((results) =>
        {
            res.json(results);
        });
    }

    catch(err)
    {
        res.status(500).send(err);
    }

}

exports.updateFilm = (req, res) =>
{
    try
    {
        var film = new Film(req.body);
        films.updateFilmById(req.params.id, film);
        films.getAll().then ((results) =>
        {
            res.json(results);
        });
    }

    catch(err)
    {
        res.status(500).send(err);
    }
}
   





