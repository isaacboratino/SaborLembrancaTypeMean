import DataAccess = require('./../DataAccess')
import IProdutoModel = require('./../../model/interfaces/IProdutoModel');

var mongoose = DataAccess.mongooseInstance;
var mongooseConnection = DataAccess.mongooseConnection;

class ProdutoSchema {

    static get schema () {
        var schema = mongoose.Schema({
            nome: {
                type: String,
                required: true
            },
            valor: {
                type: String,
                required: true
            }
        });
        return schema;
    }
}

var schema = mongooseConnection.model<IProdutoModel>('Produtos', ProdutoSchema.schema);
export = schema;