import { Express } from 'express';
import { DriversRouterController } from './routeControllers/driver.routeController';

export class Routes {
	private routeController: DriversRouterController;

	constructor(app: Express, routeController: DriversRouterController) {
		this.routeController = routeController;
		this.configureRoutes(app);
	}

	private configureRoutes(app: Express) {
		app.route('/driver').get(this.routeController.getPedidos);
	}
}
