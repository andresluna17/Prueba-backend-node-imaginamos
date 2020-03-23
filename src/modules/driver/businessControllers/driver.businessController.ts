import { pedidoRepository } from '../../../repository/pedido.repository';
import { driverRepository } from '../../../repository/driver.repository';

export class DriverBusinessController {
	private pedidoRepository: pedidoRepository;
	private driverRepository: driverRepository;

	constructor(
		pedidosRepository: pedidoRepository = new pedidoRepository(),
		driversrepository: driverRepository = new driverRepository()
	) {
		this.pedidoRepository = pedidosRepository;
		this.driverRepository = driversrepository;
	}

	public async GetAllPedido(id: number | string, date: string) {
		return this.driverRepository.getallDrivers(id, date);
	}
}
