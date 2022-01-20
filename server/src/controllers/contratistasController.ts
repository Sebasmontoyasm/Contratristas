import {Request, Response} from 'express';
import pool from '../routes/database';

class ContratistasController {

   public index (req: Request, res: Response){
       pool.query('DESCRIBE vigencia');
       res.json('vigencia');
   }

   public create (req: Request, res: Response){
       res.json({text: 'creating a game'});
   }
   public delete (req: Request, res: Response){
       res.json({text: 'deleting a game'});
   }
   public update (req: Request, res: Response){
    res.json({text: 'updating a game'});

   }
}



export const contratistasController = new ContratistasController();