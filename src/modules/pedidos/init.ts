import { Express } from 'express';
import { Routes } from './routes';
import { PedidosRouterController } from './routeControllers/pedido.routeController';

export class PedidosModule {
	public routes: Routes;

	constructor(app: Express) {
		this.routes = new Routes(app, new PedidosRouterController());
	}
}
