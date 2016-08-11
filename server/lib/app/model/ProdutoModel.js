var ProdutoModel = (function () {
    function ProdutoModel(model) {
        this._model = model;
    }
    Object.defineProperty(ProdutoModel.prototype, "nome", {
        get: function () {
            return this._model.nome;
        },
        enumerable: true,
        configurable: true
    });

    Object.defineProperty(ProdutoModel.prototype, "valor", {
        get: function () {
            return this._model.valor;
        },
        enumerable: true,
        configurable: true
    });
    return ProdutoModel;
})();

Object.seal(ProdutoModel);
module.exports = ProdutoModel;
//# sourceMappingURL=ProdutoModel.js.map
