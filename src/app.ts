import express, { Express } from 'express';
import morgan from 'morgan';
import cors from 'cors';
import { ClientesModule } from './modules/clientes/init';
import { PedidosModule } from './modules/pedidos/init';
import { DriverModule } from './modules/driver/init';
import { DBoptions } from './database';
import { createConnection } from 'typeorm';

export class App {
	app!: Express;
	constructor(private port?: number | string) {
		this.app = express();
		this.settings();
		this.middlewares();
		createConnection(DBoptions)
			.then((connection) => {
				console.log('conection DB online');
				this.initmodules();
			})
			.catch((error) => console.log(error));
	}

	private middlewares() {
		this.app.use(morgan('dev'));
		this.app.use(cors());
		this.app.use(express.json());
		this.app.use(express.urlencoded({ extended: false }));
	}

	private settings() {
		this.app.set('port', this.port || process.env.PORT || 3000);
		//this.app.use(express.bodyParser());
	}

	public async listen(): Promise<void> {
		await this.app.listen(this.app.get('port'));
		console.log('Server on port', this.app.get('port'));
	}

	private initmodules() {
		new ClientesModule(this.app);
		new PedidosModule(this.app);
		new DriverModule(this.app);
	}
}

export default new App();
