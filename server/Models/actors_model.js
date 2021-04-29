var movie_db = require ('../Connections/movie_db');



exports.getAll = () => 
{
    return movie_db.then ((conn) =>
    {
        return conn.query('SELECT * from actor');
    });
}

exports.getOneById = (id) => 
{
    return movie_db.then ((conn) =>
    {
        return conn.query('SELECT * from actor WHERE id=?', id);
    });
}

exports.insertActor = (actor) =>
{
    return movie_db.then ((conn) =>
    {
        return conn.query('INSERT INTO actor (first_name, last_name) VALUES (?, ?)',[actor.first_name, actor.last_name]);
    });
}



exports.deleteActorById = (id) => 
{
    return movie_db.then ((conn) =>
    {
        return conn.query('DELETE from actor WHERE id=?', id);
    });
}


exports.updateActorById = (id, actor) => 
{
    return movie_db.then ((conn) =>
    {
        return conn.query('UPDATE actor SET first_name=?, last_name=? WHERE id=?', [actor.first_name, actor.last_name, id]);
    });
}

