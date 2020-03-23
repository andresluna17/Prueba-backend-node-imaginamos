"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var routes_1 = require("./routes");
var driver_routeController_1 = require("./routeControllers/driver.routeController");
var DriverModule = /** @class */ (function () {
    function DriverModule(app) {
        this.routes = new routes_1.Routes(app, new driver_routeController_1.DriversRouterController());
    }
    return DriverModule;
}());
exports.DriverModule = DriverModule;
//# sourceMappingURL=init.js.map