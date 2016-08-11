var ProdutoBusiness = require('./../app/business/ProdutoBusiness');

var ProdutoController = (function () {
    function ProdutoController() {
        this._business = new ProdutoBusiness();
    }
    ProdutoController.prototype.create = function (req, res) {
        try  {
            var model = req.body;
            var business = new ProdutoBusiness();
            console.log(model);
            business.create(model, function (error, result) {
                if (error)
                    res.send({ 'error': error });
                else
                    res.send({ 'success': 'success' });
            });
        } catch (error) {
            console.log(error);
            res.send({ 'error': error });
        }
    };

    ProdutoController.prototype.retrieve = function (req, res) {
        try  {
            this._business.retrieve(function (error, result) {
                if (error)
                    res.send({ 'error': error });
                else
                    res.send(result);
            });
        } catch (error) {
            console.log(error);
            res.send({ 'Erro ': 'Erro na requisição' });
        }
    };

    ProdutoController.prototype.update = function (req, res) {
        try  {
            var model = req.body;
            var id = req.param.id;
            this._business.update(id, model, function (error, result) {
                if (error)
                    res.send({ 'error': error });
                else
                    res.send({ 'success': 'success' });
            });
        } catch (error) {
            console.log(error);
            res.send({ 'Erro ': 'Erro na requisição' });
        }
    };

    ProdutoController.prototype.delete = function (req, res) {
        try  {
            var id = req.param.id;
            this._business.delete(id, function (error, result) {
                if (error)
                    res.send({ 'error': error });
                else
                    res.send({ 'success': 'success' });
            });
        } catch (error) {
            console.log(error);
            res.send({ 'Erro ': 'Erro na requisição' });
        }
    };

    ProdutoController.prototype.findById = function (req, res) {
        try  {
            var id = req.param.id;
            this._business.findById(id, function (error, result) {
                if (error)
                    res.send({ 'error': error });
                else
                    res.send(result);
            });
        } catch (error) {
            console.log(error);
            res.send({ 'Erro ': 'Erro na requisição' });
        }
    };
    return ProdutoController;
})();
module.exports = ProdutoController;
//# sourceMappingURL=ProdutoController.js.map
