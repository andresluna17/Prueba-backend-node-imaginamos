import { Express } from 'express';
import { Routes } from './routes';
import { DriversRouterController } from './routeControllers/driver.routeController';

export class DriverModule {
	public routes: Routes;

	constructor(app: Express) {
		this.routes = new Routes(app, new DriversRouterController());
	}
}
