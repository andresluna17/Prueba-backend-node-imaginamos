import { Express } from 'express';
import { ClientesRouterController } from './routeControllers/Clientes.routeController';

export class Routes {
	private routeController: ClientesRouterController;

	constructor(app: Express, routeController: ClientesRouterController) {
		this.routeController = routeController;
		this.configureRoutes(app);
	}

	private configureRoutes(app: Express) {
		app.route('/cliente')
			.get(this.routeController.GetClientes)
			.post(this.routeController.CreateCliente);
		app.route('/cliente/:id').get(this.routeController.GetClientesById);
	}
}
