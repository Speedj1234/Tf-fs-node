import { Router, Request, Response, NextFunction } from 'express';
import{ActorModel, Actor} from '../Models/actor_model';

export class ActorController
{
    //GET ALL
    public static async getAll(req: Request, res:Response, next: NextFunction)
    {
         const results =  await ActorModel.getAll();
         res.json(results);
       
    }

    //GET ONE BY ID
    public static async getOneById(req: Request, res:Response, next: NextFunction)
    {
         const results =  await ActorModel.getOneById(req.params.id);
         res.json(results);
       
    }

    //CREATE ( INSERT) - PPOST
    public static async createActors(req: Request, res:Response, next: NextFunction)
    {
        try{
            var actor = new Actor(req.body);

        const actors =  await ActorModel.insertActor(actor);

        
        res.json(actors);
        }catch(err)
        {
            res.status(500).send(err);
        }
    }

    //DELETE
    public static async deleteActor(req: Request, res:Response, next: NextFunction)
    {
        try{

            const del = await ActorModel.deleteActorById(req.params.id);
            res.json(del);
        }
        catch(err)
        {
            res.status(500).send(err);
        }
    }

    //UPDATE-PUT
    public static async updateActor(req: Request, res:Response, next: NextFunction)
    {
        try{
            var actor = new Actor(req.body);
            const up = await ActorModel.updateActorById(req.params.id, actor);
            res.json(up);
        }
        catch(err)
        {
            res.status(500).send(err);
        }
    }







}
