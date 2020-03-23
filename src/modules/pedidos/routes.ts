import { Express } from 'express';
import { PedidosRouterController } from './routeControllers/pedido.routeController';

export class Routes {
	private routeController: PedidosRouterController;

	constructor(app: Express, routeController: PedidosRouterController) {
		this.routeController = routeController;
		this.configureRoutes(app);
	}

	private configureRoutes(app: Express) {
		app.route('/pedidos')
			.get(this.routeController.GetClientes)
			.post(this.routeController.createPedido);
		app.route('/pedidos/:id').get(this.routeController.GetPedidoById);
	}
}
