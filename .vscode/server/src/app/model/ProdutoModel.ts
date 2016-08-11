import IProdutoModel = require('./interfaces/IProdutoModel');

class ProdutoModel {

    private _model: IProdutoModel;

    constructor (model: IProdutoModel) {
        this._model = model;
    }

    get nome(): string {
        return this._model.nome;
    }

    get valor(): number {
        return this._model.valor;
    }
}

Object.seal(ProdutoModel);
export = ProdutoModel;