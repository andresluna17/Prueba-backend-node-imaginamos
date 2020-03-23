import { Request, Response } from 'express';
import { PedidoBusinessController } from '../businessControllers/pedido.businessController';
import { Pedido } from '../../../models/pedido';

export class PedidosRouterController {
	private pedidoBusinessController: PedidoBusinessController;
	constructor() {
		this.pedidoBusinessController = new PedidoBusinessController();
	}

	public GetClientes = async (req: Request, res: Response) => {
		try {
			const pedidos = await this.pedidoBusinessController.GetAllPedido();
			return res.status(200).json(pedidos);
		} catch (error) {
			console.log('Error creating new user', error);
			return res.status(400).send({ message: 'Error creating new user: ' + error });
		}
	};

	public GetPedidoById = async (req: Request, res: Response) => {
		let id = req.params.id;
		try {
			const pedido = await this.pedidoBusinessController.GetFindId(id);
			return res.status(200).json(pedido);
		} catch (error) {
			console.log('Error creating new user', error);
			return res.status(400).send({ message: 'Error creating new user: ' + error });
		}
	};

	public createPedido = async (req: Request, res: Response) => {
		const pedido = req.body;
		const clienteid: number = req.body.clienteId;
		const direcionid: number = req.body.direccionId;
		console.log(pedido);
		try {
			const pedidocreate = await this.pedidoBusinessController.createpedido(
				pedido,
				clienteid,
				direcionid
			);
			return res.status(200).json(pedidocreate);
		} catch (error) {
			console.log('Error creating new user', error);
			return res.status(400).send({ message: 'Error creating new user: ' + error });
		}
	};
}
