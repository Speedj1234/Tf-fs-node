import{ connect} from'../Connections/movie_db';

export class Actor
{
    id: number;
    first_name: string;
    last_name: string;

    constructor(data: any)
    {
        this.id = data.id;
        this.first_name = data.first_name;
        this.last_name = data.last_name;
    }
}


export class ActorModel
{
    //GET ALL
    public static async getAll()
    {
        return connect().then((conn) =>
        {
            return conn.query('SELECT * from actor').then((results) =>
            {
                return results;
            });
        });
    }

    //GET ONE BY ID
    public static async getOneById(id)
    {
        return connect().then((conn) =>
        {
            return conn.query('SELECT * from actor WHERE id=?', id).then((results) =>
            {
                return results;
            });
        });
    }

    //INSERT en POST
    public static async insertActor(actor)
    {
        return connect().then((conn) =>
        {
            return conn.query('INSERT INTO actor (first_name, last_name) VALUES (?, ?)',[actor.first_name, actor.last_name]).then(() =>
            {
                return this.getAll();
            });
        });
    }

    //DEELETE
    public static async deleteActorById(id)
    {
        return connect().then((conn) =>
        {
            return conn.query('DELETE from actor WHERE id=?', id).then(()=>
            {
                return this.getAll();
            });
           
        });
    }

    //UPDDATE
    public static async updateActorById(id, actor)
    {
        return connect().then((conn) =>
        {
            return conn.query('UPDATE actor SET first_name=?, last_name=? WHERE id=?',[actor.first_name, actor.last_name, id]).then(()=>
            {
                return this.getAll();
            });
           
        });
    }



}
