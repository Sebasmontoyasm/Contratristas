import {Request, Response} from 'express';
import pool from '../routes/database';

class ContratistasController {

   public async index (req: Request, res: Response): Promise<void> {
       const contratistas = await pool.query('SELECT * FROM contratista');
       res.json('contratista');
   }

   public search (req: Request, res: Response){
    res.json({text: 'Listing contratistas'});
   }

   public getOne (req: Request, res: Response){
    res.json({text: 'This is de Contratistas.'+ req.params.id});
   }

   public async create (req: Request, res: Response): Promise<void> {
       await pool.query('INSERT INTO GAMES SET ?',[req.body]);
       res.json({text: 'creating a contratista'});
   }
   public delete (req: Request, res: Response){
       res.json({text: 'deleting a contratista'+  + req.params.id});
   }
   public update (req: Request, res: Response){
    res.json({text: 'updating a contratista' + req.params.id});

   }
}



export const contratistasController = new ContratistasController();