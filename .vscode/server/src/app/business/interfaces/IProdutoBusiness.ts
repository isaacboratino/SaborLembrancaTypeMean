import IBusinessBase = require('./base/IBusinessBase');
import IProdutoModel = require('./../../model/interfaces/IProdutoModel');

interface IProdutoBusiness extends IBusinessBase<IProdutoModel> {

}

export = IProdutoBusiness;