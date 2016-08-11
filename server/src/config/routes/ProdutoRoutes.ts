import express = require('express');
import ProdutoController = require('./../../controllers/ProdutoController');

var router = express.Router();
class ProdutoRoutes {

    private _controller:ProdutoController;

    constructor() {
        this._controller = new ProdutoController();
    }

    get routes() {
        var controller = this._controller;
        router.get('/produtos',controller.retrieve);
        router.post('/produtos',controller.create);
        router.put('/produtos/:id',controller.update);
        router.get('/produtos/:id',controller.findById);
        router.delete('/produtos/:id', controller.delete);
        return router;
    }
}

Object.seal(ProdutoRoutes);
export = ProdutoRoutes;