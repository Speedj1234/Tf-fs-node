import * as mariadb from'mariadb';

/* 
module.exports = mariadb.createConnection(
    {
        host: 'localhost',
        user: 'root', 
        password:'',
        database: 'movie_node_express'
    }); */


export function connect()
{
    return mariadb.createConnection(
        {
            host: 'localhost',
            user: 'root', 
            password:'',
            database: 'movie_node_express'
        });
}


