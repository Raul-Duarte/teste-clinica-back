import { Router } from 'express'
import ServicosControllers from './controllers/ServicosControlles';
import SessionController from './controllers/SessionController';
import SolicitadosController from './controllers/ServicosSolicitadosController'
import UserController from './controllers/UserController';



const routes = new Router()

routes.post('/users', SessionController.store)
routes.get('/users', UserController.index)

routes.post('/solicitacao', SolicitadosController.store)
routes.get('/solicitacao', SolicitadosController.index)

routes.get('/servicos',ServicosControllers.index)


//Cadastrar Servicos
// routes.get('/', async (req, res) => {
//     const user = await Servicos.create({
//         name: 'Limpeza de pele',
//         valor: 50,
//         time: 40
//     })

//     return res.json(user)
// })


export default routes;