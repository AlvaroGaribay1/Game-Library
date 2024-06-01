import express, { Application } from 'express';
import morgan from 'morgan';
import cors from 'cors';

import indexRoutes from './routes/indexRoutes';
import notesRoutes from './routes/notesRoutes';


class Server {

    public app: Application;

    constructor() {
        this.app = express();
        this.config();
        this.routes();
    }

    config():void {
        this.app.set('port', process.env.PORT || 3000);
        this.app.use(morgan('dev'));
        this.app.use(cors({
            origin: 'http://localhost:4200', // Permitir solicitudes desde este origen específico
            methods: 'GET,HEAD,PUT,PATCH,POST,DELETE', // Métodos permitidos
            credentials: true // Permitir envío de credenciales (cookies, auth headers, etc.)
          }));
          
          // Middleware adicional
        this.app.use(express.json()); 
        this.app.use(express.json());
        this.app.use(express.urlencoded({extended: false}));
    }

    routes():void {
        this.app.use('/',indexRoutes);
        this.app.use('/api/notes',notesRoutes);
    }
    start():void {
        this.app.listen(this.app.get('port'), () => {
            console.log('Server on port', this.app.get('port'));
        });
    }
}

const server = new Server();
server.start();