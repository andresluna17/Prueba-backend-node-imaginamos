import { Cliente } from '../models/cliente';
import { getManager } from 'typeorm';

export class ClienteRepository {
	private repository = getManager().getRepository(Cliente);
	public async getall(): Promise<Cliente[]> {
		return await this.repository.find({ relations: ['direcciones'] });
	}

	public async getfindID(
		id: number | string,
		idDireccion?: number
	): Promise<Cliente | undefined> {
		return await this.repository.findOne({
			relations: ['direcciones'],
			where: { id: id, direcciones: { id: idDireccion } }
		});
	}

	public async createCliente(Cliente: Cliente): Promise<Cliente> {
		return await this.repository.save(Cliente);
	}
}
