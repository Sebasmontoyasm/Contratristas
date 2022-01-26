import {Request, Response} from 'express';
import pool from '../routes/database';

class ContratistasController {

   public async index (req: Request, res: Response): Promise<void> {
       const contratistas = await pool.query('SELECT * FROM contratista');
       res.json(contratistas);
   }

   public search (req: Request, res: Response){
    res.json({text: 'Listing contratistas'});
   }

   public async getOne (req: Request, res: Response): Promise<any>{
    const { id } = req.params;
    const contratista = await pool.query('SELECT * FROM contratista WHERE cedula = ?',[id]);   
    if(contratista.length > 0){
        return res.json(contratista[0]);
        
    }
        res.status(400).json({text: "Contratista no encontrado"});
    }

   public async create (req: Request, res: Response): Promise<void> {
       await pool.query('INSERT INTO CONTRATISTA SET ?',[req.body]);
       res.json({text: 'creating a contratista'});
   }
   public async delete (req: Request, res: Response): Promise <void> {
       const { id } = req.params;
       await pool.query('DELETE FROM CONTRATISTA WHERE cedula = ?',[id]);
       res.json({message: 'El contratista fue eliminado exitosamente'});
   }
   public async update (req: Request, res: Response): Promise <void> {
       const { id } = req.params;
       await pool.query('UPDATE CONTRATISTA set ? WHERE cedula = ?',[req.body,id]);
       res.json({message: 'El contratista fue eliminado exitosamente'}); 

   }
}

export const contratistasController = new ContratistasController();