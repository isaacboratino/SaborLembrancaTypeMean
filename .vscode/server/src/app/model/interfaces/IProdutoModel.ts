/// <reference path="../../../../typings/tsd.d.ts" />

import Mongoose = require('mongoose');

interface IProdutoModel extends Mongoose.Document
{
    nome: string,
    valor: number
}

export = IProdutoModel;