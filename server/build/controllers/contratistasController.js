"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.contratistasController = void 0;
const database_1 = __importDefault(require("../routes/database"));
class ContratistasController {
    index(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const contratistas = yield database_1.default.query('SELECT * FROM contratista');
            res.json('contratista');
        });
    }
    search(req, res) {
        res.json({ text: 'Listing contratistas' });
    }
    getOne(req, res) {
        res.json({ text: 'This is de Contratistas.' + req.params.id });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query('INSERT INTO GAMES SET ?', [req.body]);
            res.json({ text: 'creating a contratista' });
        });
    }
    delete(req, res) {
        res.json({ text: 'deleting a contratista' + +req.params.id });
    }
    update(req, res) {
        res.json({ text: 'updating a contratista' + req.params.id });
    }
}
exports.contratistasController = new ContratistasController();
