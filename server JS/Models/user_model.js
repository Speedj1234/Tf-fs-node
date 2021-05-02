var connection = require('../Connections/animal_db');

exports.getAll = () =>

{
  return connection.then((conn) =>
    {
        return conn.query("SElECT id, last_name, first_name FROM user");
        
    });
}

exports.getOneById = (id) =>
{
    return connection.then((conn) =>
    {
        return conn.query('SElECT id, last_name, first_name FROM user WHERE id=?', id);
    });
    
}

exports.getOneByFirstnameAndLastname = (firstname, lastname) =>
{
    return connection.then((conn) =>
    {
        return conn.query('SElECT first_name, last_name, id FROM user WHERE first_name=? AND last_name=?', [firstname, lastname]);
    });
    
}
   
