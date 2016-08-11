import express = require('express');
import IControllerBase = require('./interfaces/base/IControllerBase');
import ProdutoBusiness = require('./../app/business/ProdutoBusiness');
import IProdutoModel = require('./../app/model/interfaces/IProdutoModel');

class ProdutoController implements IControllerBase<ProdutoBusiness> {

    private _business: ProdutoBusiness;

    constructor() {
        this._business = new ProdutoBusiness();
    }

    create (req: express.Request, res: express.Response): void {
        try {
            var model: IProdutoModel = <IProdutoModel>req.body;
            var business: ProdutoBusiness = new ProdutoBusiness();
            console.log(model);
            business.create(model, (error, result) => {
                if (error) res.send({'error':error});
                else res.send({'success':'success'});
            })
        } catch (error) {
            console.log(error);
            res.send({'error':error});
        }
    }

    retrieve (req: express.Request, res: express.Response):void {
        try {
            this._business.retrieve((error, result) => {
                if (error) res.send({'error':error});
                else res.send(result)
            });
        } catch (error) {
            console.log(error);
            res.send({'Erro ':'Erro na requisição'});
        }
    }

    update (req: express.Request, res: express.Response): void {
        try {
            var model: IProdutoModel = <IProdutoModel>req.body;
            var id: string = req.param.id;
            this._business.update(id, model, (error, result) => {
                if (error) res.send({'error':error});
                else res.send({'success':'success'});
            });
        } catch (error) {
            console.log(error);
            res.send({'Erro ':'Erro na requisição'});
        }
    }

    delete (req: express.Request, res: express.Response): void {
        try {
            var id: string = req.param.id;
            this._business.delete(id, (error, result) => {
                if (error) res.send({'error':error});
                else res.send({'success':'success'});
            });
        } catch (error) {
            console.log(error);
            res.send({'Erro ':'Erro na requisição'});
        }
    }

    findById (req: express.Request, res: express.Response): void {
        try {
            var id: string = req.param.id;
            this._business.findById(id, (error, result) => {
                if (error) res.send({'error':error});
                else res.send(result);
            });
        } catch (error) {
            console.log(error);
            res.send({'Erro ':'Erro na requisição'});
        }
    }
}
export = ProdutoController;