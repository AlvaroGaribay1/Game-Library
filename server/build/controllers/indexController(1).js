"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.indexController = void 0;
class IndexController {
    index(req, res) {
        res.json({ message: 'APIP is /api/notes' });
    }
}
exports.indexController = new IndexController();
