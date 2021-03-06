import { Router } from "express";
import { contratistasController } from '../controllers/contratistasController';

class ContratistasRoutes {

    public router: Router = Router();

    constructor() {
        this.config();
    }

    config(): void {
        this.router.get('/', contratistasController.index);
        this.router.post('/', contratistasController.create);
        this.router.put('/:id', contratistasController.update);
        this.router.delete('/:id', contratistasController.delete);
        this.router.get('/:id', contratistasController.getOne);
        this.router.get('/', contratistasController.search);
    }
}

const contratistasRoutes = new ContratistasRoutes();
export default contratistasRoutes.router;