import express = require('express');
import ProdutoRoutes = require('./../ProdutoRoutes');

var app = express();
class RoutesBase {

    get routes() {
        app.use('/', new ProdutoRoutes().routes);
        return app;
    }
}

export = RoutesBase;