import ProdutoModel = require('./../model/ProdutoModel');
import IProdutoModel = require('./../model/interfaces/IProdutoModel');
import ProdutoSchema = require('./../dataAccess/schemas/ProdutoSchema');
import RepositoryBase = require('./base/RepositoryBase');

class ProdutoRepository extends RepositoryBase<IProdutoModel> {
    constructor () {
        super(ProdutoSchema);
    }
}

Object.seal(ProdutoRepository);
export = ProdutoRepository;