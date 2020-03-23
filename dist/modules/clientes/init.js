"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var routes_1 = require("./routes");
var Clientes_routeController_1 = require("./routeControllers/Clientes.routeController");
var ClientesModule = /** @class */ (function () {
    function ClientesModule(app) {
        this.routes = new routes_1.Routes(app, new Clientes_routeController_1.ClientesRouterController());
    }
    return ClientesModule;
}());
exports.ClientesModule = ClientesModule;
//# sourceMappingURL=init.js.map