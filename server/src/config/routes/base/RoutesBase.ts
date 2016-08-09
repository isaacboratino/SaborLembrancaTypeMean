import express = require('express');

var app = express();
class RoutesBase {

    get routes() {
        //app.uses();
        return app;
    }
}

export = RoutesBase;