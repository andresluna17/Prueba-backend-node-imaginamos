import { pedidoRepository } from '../../../repository/pedido.repository';
import { driverRepository } from '../../../repository/driver.repository';
import { ClienteRepository } from '../../../repository/Cliente.repository';
import { Driver } from '../../../models/driver';
import { Pedido } from '../../../models/pedido';
import { Cliente } from '../../../models/cliente';

export class PedidoBusinessController {
	private pedidoRepository: pedidoRepository;
	private driverRepository: driverRepository;
	private clienteRepository: ClienteRepository;

	constructor(
		pedidosRepository: pedidoRepository = new pedidoRepository(),
		driversrepository: driverRepository = new driverRepository(),
		Clienterepository: ClienteRepository = new ClienteRepository()
	) {
		this.pedidoRepository = pedidosRepository;
		this.driverRepository = driversrepository;
		this.clienteRepository = Clienterepository;
	}

	public async GetAllPedido() {
		return this.pedidoRepository.getall();
	}

	public async GetFindId(id: number | string) {
		return this.pedidoRepository.getfindID(id);
	}

	public async createpedido(
		pedido: Pedido,
		clienteid: number | string,
		direccion: number
	) {
		const cliente: Cliente | undefined = await this.clienteRepository.getfindID(
			clienteid,
			direccion
		);
		pedido.cliente = cliente!;
		pedido.direccion = cliente!.direcciones[0];
		const pedidocreado = await this.pedidoRepository.createPedido(pedido);
		const driver: Driver | undefined = await this.driverRepository.getdDriverRandom();
		pedidocreado.drivers = [driver!];
		this.driverRepository.createDriverRelation(driver!);
		return pedidocreado;
	}
}
