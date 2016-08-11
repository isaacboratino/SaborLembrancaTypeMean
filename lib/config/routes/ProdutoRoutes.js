var express = require('express');
var ProdutoController = require('./../../controllers/ProdutoController');

var router = express.Router();
var ProdutoRoutes = (function () {
    function ProdutoRoutes() {
        this._controller = new ProdutoController();
    }
    Object.defineProperty(ProdutoRoutes.prototype, "routes", {
        get: function () {
            var controller = this._controller;
            router.get('/produtos', controller.retrieve);
            router.post('/produtos', controller.create);
            router.put('/produtos/:id', controller.update);
            router.get('/produtos/:id', controller.findById);
            router.delete('/produtos/:id', controller.delete);
            return router;
        },
        enumerable: true,
        configurable: true
    });
    return ProdutoRoutes;
})();

Object.seal(ProdutoRoutes);
module.exports = ProdutoRoutes;
//# sourceMappingURL=ProdutoRoutes.js.map
