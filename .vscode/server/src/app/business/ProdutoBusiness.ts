/// <reference path="../../../typings/tsd.d.ts" />

import IProdutoBusiness = require('./interfaces/IProdutoBusiness');
import ProdutoRepository = require('./../repository/ProdutoRepository');
import IProdutoModel = require('./../model/interfaces/IProdutoModel');
import ProdutoModel = require('./../model/ProdutoModel');

class ProdutoBusiness implements IProdutoBusiness {

    private _repository: ProdutoRepository;

    constructor() {
        this._repository = new ProdutoRepository;
    }

    create (item: IProdutoModel, callback: (error: any, result: any) => void) {
        this._repository.create(item, callback);
    }

    retrieve (callback: (error: any, result: any) => void) {
        this._repository.retrieve(callback);
    }  

    update (id: string, item: IProdutoModel, callback: (error: any, result: any) => void) {

        this._repository.findById(id, (err, res) => {
            if 
                (err) callback(err, res);            
            else 
                this._repository.update(res._id, item, callback);               
        }); 

        this._repository.update({}, item, callback); 
    }

    delete (id: string, callback: (error: any, result: any) => void) {
        this._repository.delete(id, (err) => callback(err, null));
    }

    findById (id: string, callback: (error: any, result: IProdutoModel) => void) {
        this._repository.findById(id, callback);
    } 
}

Object.seal(ProdutoBusiness);
export = ProdutoBusiness;