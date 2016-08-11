/// <reference path="../../../../typings/tsd.d.ts" />
import mongoose = require("mongoose");

interface IProdutoModel extends mongoose.Document {
  nome: string;
  valor: number;
}

export = IProdutoModel;