var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var ProdutoSchema = require('./../dataAccess/schemas/ProdutoSchema');
var RepositoryBase = require('./base/RepositoryBase');

var ProdutoRepository = (function (_super) {
    __extends(ProdutoRepository, _super);
    function ProdutoRepository() {
        _super.call(this, ProdutoSchema);
    }
    return ProdutoRepository;
})(RepositoryBase);

Object.seal(ProdutoRepository);
module.exports = ProdutoRepository;
//# sourceMappingURL=ProdutoRepository.js.map
