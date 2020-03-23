import { getManager } from 'typeorm';
import { Driver } from '../models/driver';

export class driverRepository {
	public async getallDrivers(id: number | string, fecha: string) {
		return await getManager()
			.getRepository(Driver)
			.findOne({
				relations: ['pedidos', 'pedidos.cliente', 'pedidos.direccion'],
				where: 'driver.id=' + id + ' AND fecha_entrega="' + fecha + '"'
			});
	}

	public async createDriverRelation(driver: Driver) {
		return await getManager()
			.getRepository(Driver)
			.save(driver);
	}

	public async getdDriverRandom() {
		const drivers: Driver[] = await getManager()
			.getRepository(Driver)
			.find({
				relations: ['pedidos']
			});
		return drivers[Math.floor(Math.random() * drivers.length)];
	}
}
