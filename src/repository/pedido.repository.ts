import { Pedido } from '../models/pedido';
import { getManager } from 'typeorm';

export class pedidoRepository {
	public async getall(): Promise<Pedido[]> {
		return await getManager()
			.getRepository(Pedido)
			.createQueryBuilder()
			.getMany();
	}

	public async getfindID(id: number | string): Promise<Pedido | undefined> {
		return await getManager()
			.getRepository(Pedido)
			.findOne({ where: { id: id } });
	}

	public async createPedido(pedido: Pedido): Promise<Pedido> {
		return await getManager()
			.getRepository(Pedido)
			.save(pedido);
	}
}
