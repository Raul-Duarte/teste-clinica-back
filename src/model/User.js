import Sequelize, { Model } from 'sequelize'


class User extends Model {
    static init(sequelize) {
        super.init({
            // id:Sequelize.INTEGER,
            name: Sequelize.STRING,
            password_hash: Sequelize.STRING,
            provider: Sequelize.BOOLEAN,
        }, {
            sequelize
        })
    }
}

export default User