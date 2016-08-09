/// <reference path="../../../../typings/tsd.d.ts" />

import IRead = require('./../interfaces/IRead');
import IWrite = require('./../interfaces/IWrite');

import Mongoose = require('mongoose');

class RepositoryBase<T extends Mongoose.Document> implements IRead<T>, IWrite<T> {

    private _model: Mongoose.Model<Mongoose.Document>;

    constructor(schemaModel: Mongoose.Model<Mongoose.Document>) {
        this._model = schemaModel;
    }

    retrieve (callback: (error: any, result: any) => void) {
        this._model.find({}, callback);
    }

    findById (id: string, callback: (error: any, resukt: any) => void) {
        this._model.findById(id, callback);
    } 

    create (item: T, callback: (error: any, result: any) => void) {
        this._model.create(item, callback);
    }

    update (id: Mongoose.Types.ObjectId, item: T, callback: (error: any, result: any) => void) {
        this._model.update({}, item, callback);
    }

    delete (id: string, callback: (error: any, result: any) => void) {
        this._model.remove({_id: this.toObjectId(id)}, (err) => callback(err, null));
    }

    private toObjectId(id: string) : Mongoose.Types.ObjectId {
        return Mongoose.Types.ObjectId.createFromHexString(id);
    }
}

export = RepositoryBase;