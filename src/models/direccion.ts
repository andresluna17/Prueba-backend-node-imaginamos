import {
	Entity,
	PrimaryGeneratedColumn,
	ManyToOne,
	Column,
	OneToMany,
	JoinColumn
} from 'typeorm';
import { Cliente } from './cliente';
import { Pedido } from './pedido';

@Entity()
export class Direccion {
	constructor() {}
	@PrimaryGeneratedColumn()
	id!: number | string;
	@Column()
	direccion!: string;
	@ManyToOne(
		(type) => Cliente,
		(cliente) => cliente.direcciones
	)
	@JoinColumn()
	cliente!: Cliente;

	@OneToMany(
		(type) => Pedido,
		(Pedido) => Pedido.direccion
	)
	pedido!: Pedido;
}
