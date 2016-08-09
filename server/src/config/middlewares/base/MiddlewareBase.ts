import express = require('express');
import bodyParse = require('body-parse');

import MethodOverride = require('./../MethodOverride');
import RoutesBase = require('./../../routes/base/RoutesBase')

class MiddlewareBase {

    static get configuration() {
        var app = express();
        app.use(bodyParse.json());
        app.use(MethodOverride.configuration());
        app.use(new RoutesBase().routes);

        return app;
    }
}

Object.seal(MiddlewareBase);
export = MiddlewareBase;