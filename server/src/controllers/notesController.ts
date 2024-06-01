import { Request, Response } from "express";
import pool from "../database";
import { createPool } from "promise-mysql";
import keys from "../keys";

class NotesController {

    public async list (req: Request, res: Response) {
        const notes = await (await pool).query('SELECT * FROM notes');
        res.json(notes);
    }

    public async getOne (req: Request, res: Response): Promise<any> {
        const pool = await createPool(keys.database);
        const {id} = req.params;
        const notes = await pool.query('SELECT * FROM notes WHERE id = ?',[id]);
        if (notes.length > 0) {
            return res.json(notes[0]);
        }
        res.status(404).json({text: "The game doesnt exist"});
        await (await pool).end();
    }

    public async create (req: Request, res: Response): Promise<void> {
        await (await pool).query('INSERT INTO notes set ?', [req.body]);
        res.json({message: 'Note Saved'});
    }

    public async delete (req: Request, res: Response): Promise<void> {
        const {id} = req.params;
        await (await pool).query('DELETE FROM notes WHERE id = ?',[id]);
        res.json({message: 'The game was deleted'});
    }

    public async update (req: Request, res: Response): Promise<void> {
        const {id} = req.params;
        await (await pool).query('UPDATE notes set ? WHERE id = ?', [req.body, [id]]);
        res.json({message: 'The game was updated'});
    }
}

const notesController = new NotesController();
export default notesController;