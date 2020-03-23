import { Request, Response } from 'express';
import { DriverBusinessController } from '../businessControllers/driver.businessController';

export class DriversRouterController {
	private DriverBusinessController: DriverBusinessController;
	constructor() {
		this.DriverBusinessController = new DriverBusinessController();
	}

	public getPedidos = async (req: Request, res: Response) => {
		let fecha: string = req.body.fecha;
		let id: number = req.body.id;
		try {
			const pedidos = await this.DriverBusinessController.GetAllPedido(id, fecha);
			return res.status(200).json(pedidos);
		} catch (error) {
			console.log('Error creating new user', error);
			return res.status(400).send({ message: 'Error creating new user: ' + error });
		}
	};
}
