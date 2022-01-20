import {Request, Response} from 'express';

class IndexController {

   public index (req: Request, res: Response){
       res.json({text: 'API IS /contratistas'});
   }
}

export const indexController = new IndexController();