"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Routes = /** @class */ (function () {
    function Routes(app, routeController) {
        this.routeController = routeController;
        this.configureRoutes(app);
    }
    Routes.prototype.configureRoutes = function (app) {
        app.route('/pedidos')
            .get(this.routeController.GetClientes)
            .post(this.routeController.createPedido);
        app.route('/pedidos/:id').get(this.routeController.GetPedidoById);
    };
    return Routes;
}());
exports.Routes = Routes;
//# sourceMappingURL=routes.js.map