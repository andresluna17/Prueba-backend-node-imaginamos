import {
	Entity,
	PrimaryGeneratedColumn,
	OneToOne,
	JoinColumn,
	Column,
	ManyToMany,
	JoinTable,
	OneToMany,
	ManyToOne
} from 'typeorm';
import { Cliente } from './cliente';
import { Direccion } from './direccion';
import { Driver } from './driver';

@Entity()
export class Pedido {
	@PrimaryGeneratedColumn()
	id!: string | number;

	@ManyToOne(
		(type) => Cliente,
		(cliente) => cliente.pedidos
	)
	@JoinColumn()
	cliente!: Cliente;

	@ManyToOne(
		(type) => Direccion,
		(direccion) => direccion.direccion
	)
	@JoinColumn()
	direccion!: Direccion;

	@Column({ type: 'date' })
	fecha_entrega!: string;

	@Column({ type: 'time' })
	hora_minima!: string;
	@Column({ type: 'time' })
	hora_maxima!: string;

	@ManyToMany(
		(type) => Driver,
		(driver) => driver.pedidos
	)
	drivers!: Driver[];
}
