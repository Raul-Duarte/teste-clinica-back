import Sequelize, { Model } from 'sequelize'


class Servicos extends Model {
    static init(sequelize) {
        super.init({
            name: Sequelize.STRING,
            valor: Sequelize.INTEGER,
            time: Sequelize.INTEGER,
            
        }, {
            sequelize
        })
    }
}

export default Servicos