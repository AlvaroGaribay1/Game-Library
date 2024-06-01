import { Router } from "express";
import notesController from "../controllers/notesController";

class NotesRoutes {

    public router: Router = Router();

    constructor() {
        this.config();
    }

    config():void {
        this.router.get('/', notesController.list);
        this.router.get('/:id', notesController.getOne);
        this.router.post('/', notesController.create);
        this.router.put('/:id', notesController.update);
        this.router.delete('/:id', notesController.delete);
    }

}

const notesRoutes = new NotesRoutes();
export default notesRoutes.router;