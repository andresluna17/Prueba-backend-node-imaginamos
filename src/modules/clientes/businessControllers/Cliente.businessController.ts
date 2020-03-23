import { ClienteRepository } from '../../../repository/Cliente.repository';
import { Cliente } from 'models/cliente';

export class ClienteBusinessController {
	private clienteRepository: ClienteRepository;

	constructor(clienteRepository: ClienteRepository = new ClienteRepository()) {
		this.clienteRepository = clienteRepository;
	}

	public async GetAllClientes() {
		return this.clienteRepository.getall();
	}

	public async GetFindId(id: number | string) {
		return this.clienteRepository.getfindID(id);
	}

	public async CreateCliente(Cliente: Cliente) {
		return this.clienteRepository.createCliente(Cliente);
	}
}
