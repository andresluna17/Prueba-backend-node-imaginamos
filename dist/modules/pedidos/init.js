"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var routes_1 = require("./routes");
var pedido_routeController_1 = require("./routeControllers/pedido.routeController");
var PedidosModule = /** @class */ (function () {
    function PedidosModule(app) {
        this.routes = new routes_1.Routes(app, new pedido_routeController_1.PedidosRouterController());
    }
    return PedidosModule;
}());
exports.PedidosModule = PedidosModule;
//# sourceMappingURL=init.js.map