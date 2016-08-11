import express = require("express");
import ProdutoBusiness = require('./../app/business/ProdutoBusiness');
import IControllerBase = require('./interfaces/base/IControllerBase');
import IProdutoModel = require('./../app/model/interfaces/IProdutoModel');

class HeroController implements IControllerBase <ProdutoBusiness> {
    
    create(req: express.Request, res: express.Response): void {
            try {
                                   
                var hero: IProdutoModel = <IProdutoModel>req.body;
                var heroBusiness = new ProdutoBusiness();
                heroBusiness.create(hero, (error, result) => {
                    if(error) res.send({"error": "error"});
                    else res.send({"success": "success"});
                });
            }
            catch (e)  {
                console.log(e);
                res.send({"error": "error in your request"});

            }
    }
    update(req: express.Request, res: express.Response): void {
        try {
             var hero: IHeroModel = <IHeroModel>req.body;
             var _id: string = req.params._id;
             var heroBusiness = new HeroBusiness();
                heroBusiness.update(_id, hero, (error, result) => {
                    if(error) res.send({"error": "error"});
                    else res.send({"success": "success"});
                });   
            }
            catch (e)  {
                console.log(e);
                res.send({"error": "error in your request"});

            }
    }
    delete(req: express.Request, res: express.Response): void {
        try {
                
             var _id: string = req.params._id;
             var heroBusiness = new HeroBusiness();
                heroBusiness.delete(_id, (error, result) => {
                    if(error) res.send({"error": "error"});
                    else res.send({"success": "success"});
                });   
            }
            catch (e)  {
                console.log(e);
                res.send({"error": "error in your request"});

            }
    }
    retrieve(req: express.Request, res: express.Response): void {
        try {
                
             var heroBusiness = new HeroBusiness();
                heroBusiness.retrieve((error, result) => {
                    if(error) res.send({"error": "error"});
                    else res.send(result);
                });   
            }
            catch (e)  {
                console.log(e);
                res.send({"error": "error in your request"});

            }
    }
    findById(req: express.Request, res: express.Response): void {
        try {
             
             var _id: string = req.params._id;
             var heroBusiness = new HeroBusiness();
                heroBusiness.findById(_id, (error, result) => {
                    if(error) res.send({"error": "error"});
                    else res.send(result);
                });   
            }
            catch (e)  {
                console.log(e);
                res.send({"error": "error in your request"});
                
            }
    }        
}
export = HeroController;    