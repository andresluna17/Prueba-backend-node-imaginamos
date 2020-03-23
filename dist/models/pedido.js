"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var typeorm_1 = require("typeorm");
var cliente_1 = require("./cliente");
var direccion_1 = require("./direccion");
var driver_1 = require("./driver");
var Pedido = /** @class */ (function () {
    function Pedido() {
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn(),
        __metadata("design:type", Object)
    ], Pedido.prototype, "id", void 0);
    __decorate([
        typeorm_1.OneToOne(function (type) { return cliente_1.Cliente; }, { cascade: true }),
        typeorm_1.JoinColumn(),
        __metadata("design:type", cliente_1.Cliente)
    ], Pedido.prototype, "cliente", void 0);
    __decorate([
        typeorm_1.OneToOne(function (type) { return direccion_1.Direccion; }, { cascade: true }),
        typeorm_1.JoinColumn(),
        __metadata("design:type", direccion_1.Direccion)
    ], Pedido.prototype, "direccion", void 0);
    __decorate([
        typeorm_1.Column({ type: 'date' }),
        __metadata("design:type", String)
    ], Pedido.prototype, "fecha_entrega", void 0);
    __decorate([
        typeorm_1.Column({ type: 'time' }),
        __metadata("design:type", String)
    ], Pedido.prototype, "hora_minima", void 0);
    __decorate([
        typeorm_1.Column({ type: 'time' }),
        __metadata("design:type", String)
    ], Pedido.prototype, "hora_maxima", void 0);
    __decorate([
        typeorm_1.ManyToMany(function (type) { return driver_1.Driver; }, function (driver) { return driver.pedidos; }),
        __metadata("design:type", Array)
    ], Pedido.prototype, "drivers", void 0);
    Pedido = __decorate([
        typeorm_1.Entity()
    ], Pedido);
    return Pedido;
}());
exports.Pedido = Pedido;
//# sourceMappingURL=pedido.js.map