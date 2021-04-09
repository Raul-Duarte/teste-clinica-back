import Sequelize, { Model } from 'sequelize'

class ServicosSolicitados extends Model {
    static init(sequelize) {
        super.init({
            user_id: Sequelize.INTEGER,
            servicos_id: Sequelize.INTEGER,
            name_servico: Sequelize.STRING,
            name_cliente: Sequelize.STRING,
            valor: Sequelize.INTEGER,
            time: Sequelize.INTEGER,
        
        }, {
            sequelize,
        })

        return this
    }
    static associate(models){
        this.belongsTo(models.User,{foreignKey:'user_id', as:'user'})
        this.belongsTo(models.Servicos,{foreignKey:'servicos_id', as:'servicos'})
    }

}

export default ServicosSolicitados