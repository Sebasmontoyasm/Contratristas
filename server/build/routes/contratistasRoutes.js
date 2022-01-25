"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const contratistasController_1 = require("../controllers/contratistasController");
class ContratistasRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/', contratistasController_1.contratistasController.index);
        this.router.post('/', contratistasController_1.contratistasController.create);
        this.router.put('/:id', contratistasController_1.contratistasController.update);
        this.router.delete('/:id', contratistasController_1.contratistasController.delete);
        this.router.get('/:id', contratistasController_1.contratistasController.getOne);
        this.router.get('/', contratistasController_1.contratistasController.search);
    }
}
const contratistasRoutes = new ContratistasRoutes();
exports.default = contratistasRoutes.router;
