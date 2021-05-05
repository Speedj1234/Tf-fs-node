import{ connect} from'../Connections/movie_db';

export class User
{
    id: number;
    username: string;
    email: string;
    password:string;

    constructor(data: any)
    {
        this.id = data.id;
        this.username= data.username;
        this.email = data.email;
        this.password = data.password;
    }
}


export class UserModel
{
    //GET ALL
    public static async getAll()
    {
        return connect().then((conn) =>
        {
            return conn.query('SELECT id, username, email FROM users').then((results) => // je sélectionne tout sauf le password, qui peut être visible dans la console du front....
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
            return conn.query('SELECT * from users WHERE id=?', id).then((results) =>
            {
                return results;
            });
        });
    }

    //INSERT en POST
    public static async insertUser(user)
    {
        return connect().then((conn) =>
        {
            return conn.query('INSERT INTO users (username, email, password) VALUES (?, ?, ?)',[user.username, user.email, user.password]).then(() =>
            {
                return this.getAll();
            });
        });
    }

    //DEELETE
    public static async deleteUserById(id)
    {
        return connect().then((conn) =>
        {
            return conn.query('DELETE from users WHERE id=?', id).then(()=>
            {
                return this.getAll();
            });
           
        });
    }

    //UPDDATE
    public static async updateUserById(id, user)
    {
        return connect().then((conn) =>
        {
            return conn.query('UPDATE users SET username=?, email=?, password=?  WHERE id=?',[user.username, user.email, user.password, id]).then(()=>
            {
                return this.getAll();
            });
           
        });
    }



}
