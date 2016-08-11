import Mongoose = require('mongoose');

interface IWrite<T> {
    create: (item: T, callback: (error: any, result: any) => void) => void;
    update: (id: Mongoose.Types.ObjectId, item: T, callback: (error: any, result: any) => void) => void;
    delete: (id: string, callback: (error: any, result: any) => void) => void;
}

export = IWrite;