import Sequelize from 'sequelize'
import User from '../model/User'
import databaseConfig from '../config/database'
import Servicos from '../model/Servicos'
import ServicosSolicitados from '../model/ServicosSolicitados'

const models = [User,Servicos,ServicosSolicitados]

class Database {
    constructor() {
        this.init()
    }


    init() {
        this.connection = new Sequelize(databaseConfig)
        models.map(model => model.init(this.connection))
        models.map(model => model.associate && model.associate(this.connection.models))
    }
}

export default new Database()