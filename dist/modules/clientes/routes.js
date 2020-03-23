"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Routes = /** @class */ (function () {
    function Routes(app, routeController) {
        this.routeController = routeController;
        this.configureRoutes(app);
    }
    Routes.prototype.configureRoutes = function (app) {
        app.route('/cliente').get(this.routeController.GetClientes);
        app.route('/cliente/:id').get(this.routeController.GetClientesById);
    };
    return Routes;
}());
exports.Routes = Routes;
//# sourceMappingURL=routes.js.map