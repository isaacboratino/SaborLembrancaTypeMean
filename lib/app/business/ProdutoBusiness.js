/// <reference path="../../../typings/tsd.d.ts" />
var ProdutoRepository = require('./../repository/ProdutoRepository');

var ProdutoBusiness = (function () {
    function ProdutoBusiness() {
        this._repository = new ProdutoRepository;
    }
    ProdutoBusiness.prototype.create = function (item, callback) {
        this._repository.create(item, callback);
    };

    ProdutoBusiness.prototype.retrieve = function (callback) {
        this._repository.retrieve(callback);
    };

    ProdutoBusiness.prototype.update = function (id, item, callback) {
        var _this = this;
        this._repository.findById(id, function (err, res) {
            if (err)
                callback(err, res);
            else
                _this._repository.update(res._id, item, callback);
        });

        this._repository.update({}, item, callback);
    };

    ProdutoBusiness.prototype.delete = function (id, callback) {
        this._repository.delete(id, function (err) {
            return callback(err, null);
        });
    };

    ProdutoBusiness.prototype.findById = function (id, callback) {
        this._repository.findById(id, callback);
    };
    return ProdutoBusiness;
})();

Object.seal(ProdutoBusiness);
module.exports = ProdutoBusiness;
//# sourceMappingURL=ProdutoBusiness.js.map
