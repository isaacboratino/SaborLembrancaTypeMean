var express = require('express');
var ProdutoRoutes = require('./../ProdutoRoutes');

var app = express();
var RoutesBase = (function () {
    function RoutesBase() {
    }
    Object.defineProperty(RoutesBase.prototype, "routes", {
        get: function () {
            app.uses('/', new ProdutoRoutes());
            return app;
        },
        enumerable: true,
        configurable: true
    });
    return RoutesBase;
})();

module.exports = RoutesBase;
//# sourceMappingURL=RoutesBase.js.map
