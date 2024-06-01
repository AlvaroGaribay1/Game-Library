import { Request, Response } from "express";


class IndexController {

    public index (req: Request, res: Response) {
        res.json({message: 'APIP is /api/notes'})
    }

}

export const indexController = new IndexController();