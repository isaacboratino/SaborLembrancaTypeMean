import express = require('express');
import IControllerBase = require('./interfaces/base/IControllerBase');
import ProdutoBusiness = require('./../app/business/ProdutoBusiness');
import IProdutoModel = require('./../app/model/interfaces/IProdutoModel');

class ProdutoController extends IControllerBase<ProdutoBusiness> {

}
export = ProdutoController;