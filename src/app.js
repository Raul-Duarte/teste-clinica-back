import express from 'express';
import routes  from './router';
import cors from 'cors'
import './database' //Chamando o database

class App {
    
    constructor() {
        this.server = express();
        this.middlewares();
        this.routes();
    }

    middlewares(){
        this.server.use(cors())
        this.server.use(express.json()) //RECEBENDO REQUISIÇÃO 
    }
    routes(){
        this.server.use(routes) //RECEBENDO AS ROTAS
    }
}

export default new App().server;