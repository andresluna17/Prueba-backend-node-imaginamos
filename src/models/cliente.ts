import { Entity, PrimaryGeneratedColumn, Column, OneToMany, JoinColumn } from 'typeorm';
import { Direccion } from './direccion';
import { Pedido } from './pedido';

@Entity()
export class Cliente {
	@PrimaryGeneratedColumn()
	id!: number | number;

	@Column()
	nombre!: string;
	@Column()
	apellido!: string;
	@Column()
	email!: string;
	@Column()
	telefono!: number;

	@OneToMany(
		(type) => Direccion,
		(direccion) => direccion.cliente
	)
	direcciones!: Direccion[];
	@OneToMany(
		(type) => Pedido,
		(pedido) => pedido.cliente
	)
	pedidos!: Pedido[];
}
