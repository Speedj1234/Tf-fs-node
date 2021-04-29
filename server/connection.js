var mariadb = require("mariadb");

module.exports = mariadb.createConnection(
    {
        host: 'localhost',
        user: 'root', 
        password:'',
        database: 'db_animalerie'
    }
)