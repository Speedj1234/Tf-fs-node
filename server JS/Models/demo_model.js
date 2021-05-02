var connection = require ('../Connections/animal_db');

exports.getAll = () =>

{
  return connection.then((conn) =>
    {
        return conn.query("SElECT id, breed_id, chip_number FROM animal");
        
    });
}

exports.getOneById = (id) =>
{
    return connection.then((conn) =>
    {
        return conn.query('SELECT id, breed_id, chip_number FROM animal WHERE id=?', id);
    });
    
}

exports.getOneByIdAndNbr = (id, nbr) =>
{
    return connection.then((conn) =>
    {
        return conn.query('SELECT id, breed_id, chip_number FROM animal WHERE breed_id=? AND chip_number=?', [id, nbr]);
    });
    
}
   
