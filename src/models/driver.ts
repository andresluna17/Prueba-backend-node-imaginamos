import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable } from 'typeorm';
import { type } from 'os';
import { Pedido } from './pedido';
import { join } from 'bluebird';

@Entity()
export class Driver {
	@PrimaryGeneratedColumn()
	id!: number | string;

	@Column({ type: 'bool' })
	activo!: boolean;

	@ManyToMany(
		(type) => Pedido,
		(pedido) => pedido.drivers
	)
	@JoinTable()
	pedidos!: Pedido[];
}
