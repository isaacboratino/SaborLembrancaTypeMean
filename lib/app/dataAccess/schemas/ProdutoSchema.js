var DataAccess = require('./../DataAccess');

var mongoose = DataAccess.mongooseInstance;
var mongooseConnection = DataAccess.mongooseConnection;

var ProdutoSchema = (function () {
    function ProdutoSchema() {
    }
    Object.defineProperty(ProdutoSchema, "schema", {
        get: function () {
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
        },
        enumerable: true,
        configurable: true
    });
    return ProdutoSchema;
})();

var schema = mongooseConnection.model('Produtos', ProdutoSchema.schema);
module.exports = schema;
//# sourceMappingURL=ProdutoSchema.js.map
