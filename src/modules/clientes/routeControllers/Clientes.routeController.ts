import { Request, Response } from 'express';
import { ClienteBusinessController } from '../businessControllers/Cliente.businessController';
import { Cliente } from 'models/cliente';

export class ClientesRouterController {
	private clienteBusinessController: ClienteBusinessController;
	constructor() {
		this.clienteBusinessController = new ClienteBusinessController();
	}

	public GetClientes = async (req: Request, res: Response) => {
		try {
			const clientes = await this.clienteBusinessController.GetAllClientes();
			return res.status(200).json(clientes);
		} catch (error) {
			console.log('Error get all clientes', error);
			return res.status(400).send({ message: 'Error get all clientes: ' + error });
		}
	};

	public GetClientesById = async (req: Request, res: Response) => {
		let id = req.params.id;
		try {
			const clientes = await this.clienteBusinessController.GetFindId(id);
			return res.status(200).json(clientes);
		} catch (error) {
			console.log('EError get one clientes', error);
			return res.status(400).send({ message: 'Error get all clientes: ' + error });
		}
	};

	public CreateCliente = async (req: Request, res: Response) => {
		const cliente: Cliente = req.body;
		console.log(cliente);
		try {
			const clientes = await this.clienteBusinessController.CreateCliente(cliente);
			return res.status(200).json(clientes);
		} catch (error) {
			console.log('EError get one clientes', error);
			return res.status(400).send({ message: 'Error get all clientes: ' + error });
		}
	};
}
