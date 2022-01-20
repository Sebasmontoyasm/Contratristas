"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.contratistasController = void 0;
const database_1 = __importDefault(require("../routes/database"));
class ContratistasController {
    index(req, res) {
        database_1.default.query('DESCRIBE vigencia');
        res.json('vigencia');
    }
    create(req, res) {
        res.json({ text: 'creating a game' });
    }
    delete(req, res) {
        res.json({ text: 'deleting a game' });
    }
    update(req, res) {
        res.json({ text: 'updating a game' });
    }
}
exports.contratistasController = new ContratistasController();
