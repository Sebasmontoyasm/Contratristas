import { Router } from "express";

class ContratistasRoutes {

    public router: Router = Router();

    constructor() {
        this.config();
    }

    config(): void {
        this.router.get('/', (req,res) => res.send('Contratistas'));
    }
}

const contratistasRoutes = new ContratistasRoutes();
export default contratistasRoutes.router;