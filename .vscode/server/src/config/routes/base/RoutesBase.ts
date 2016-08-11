import express = require('express');
import ProdutoRoutes = require('./../ProdutoRoutes');

var app = express();
class RoutesBase {

    get routes() {
        app.uses('/', new ProdutoRoutes());
        return app;
    }
}

export = RoutesBase;