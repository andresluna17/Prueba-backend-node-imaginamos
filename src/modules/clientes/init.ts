import { Express } from 'express';
import { Routes } from './routes';
import { ClientesRouterController } from './routeControllers/Clientes.routeController';

export class ClientesModule {
	public routes: Routes;

	constructor(app: Express) {
		this.routes = new Routes(app, new ClientesRouterController());
	}
}
