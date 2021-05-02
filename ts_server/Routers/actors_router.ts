import { Router} from 'express';
import { ActorController } from '../Controllers/actor_controller';

export class ActorRouter
{
    public router: Router;

    constructor()
    {
        this.router = Router();
    
        this.router.get('/', ActorController.getAll);

        this.router.get('/:id', ActorController.getOneById);

        this.router.post('/create', ActorController.createActors);

        this.router.delete('/:id', ActorController.deleteActor);

        this.router.put('/:id', ActorController.updateActor);
    }
}
