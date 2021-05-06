import * as express from 'express';
import{ ActorRouter } from './Routers/actors_router'
import{ UserRouter } from './Routers/users_router'
import{AuthentificationRouter} from './Routers/authentification_router'

import * as cors from 'cors';

export class Server 
{
    private app: express.Application;
    constructor()
    {
        /*
        required : 
        npm install ts-node @types/express typescript
        */

        // create the application
        this.app = express();
        this.app.use(cors());
        // Body parser is now replaced by 'express'
        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended: false }));

        this.init_routes();
    }
    private init_routes()
    {
        this.app.use('/api/token', new AuthentificationRouter().router);
        this.app.use(AuthentificationRouter.checkAuthorization);
        this.app.use('/api/movies/actors', new ActorRouter().router)
        this.app.use('/api/movies/users', new UserRouter().router)
    }
    public start()
    {
        
        this.app.listen(8000);
    }
}