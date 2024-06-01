"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("../database"));
const promise_mysql_1 = require("promise-mysql");
const keys_1 = __importDefault(require("../keys"));
class NotesController {
    async list(req, res) {
        const notes = await (await database_1.default).query('SELECT * FROM notes');
        res.json(notes);
    }
    async getOne(req, res) {
        const pool = await (0, promise_mysql_1.createPool)(keys_1.default.database);
        const { id } = req.params;
        const notes = await pool.query('SELECT * FROM notes WHERE id = ?', [id]);
        if (notes.length > 0) {
            return res.json(notes[0]);
        }
        res.status(404).json({ text: "The game doesnt exist" });
        await (await pool).end();
    }
    async create(req, res) {
        await (await database_1.default).query('INSERT INTO notes set ?', [req.body]);
        res.json({ message: 'Note Saved' });
    }
    async delete(req, res) {
        const { id } = req.params;
        await (await database_1.default).query('DELETE FROM notes WHERE id = ?', [id]);
        res.json({ message: 'The game was deleted' });
    }
    async update(req, res) {
        const { id } = req.params;
        await (await database_1.default).query('UPDATE notes set ? WHERE id = ?', [req.body, [id]]);
        res.json({ message: 'The game was updated' });
    }
}
const notesController = new NotesController();
exports.default = notesController;
