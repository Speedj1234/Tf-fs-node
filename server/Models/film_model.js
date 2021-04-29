var movie_db = require ('../Connections/movie_db');
var moment = require('moment'); // require


exports.getAll = () => 
{
    return movie_db.then ((conn) =>
    {
        return conn.query('SELECT * from film');
    });
}

exports.getOneById = (id) => 
{
    return movie_db.then ((conn) =>
    {
        return conn.query('SELECT * from film WHERE id=?', id);
    });
}

exports.insertFilm = (film) =>
{
    return movie_db.then ((conn) =>
    {
        
        return conn.query('INSERT INTO film (title, description, annee_sortie) VALUES (?, ?, ?)',
        [film.title, film.description, moment(film.annee_sortie,).format('YYYY-MM-DD')]);
    });
}


exports.deleteFilmById = (id) => 
{
    return movie_db.then ((conn) =>
    {
        return conn.query('DELETE from film WHERE id=?', id);
    });
}


exports.updateFilmById = (id, film) => 
{
    return movie_db.then ((conn) =>
    {
        return conn.query('UPDATE film SET title=?, description=?, annee_sortie=? WHERE id=?', 
        [film.title, film.description, moment(film.annee_sortie).format('YYYY-MM-DD'), id]);
    });
}

