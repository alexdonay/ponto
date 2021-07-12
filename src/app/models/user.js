const Sequelize = require('sequelize')

class User extends Sequelize.Model{
  static init(sequelize){
      super.init(
        {
        user: Sequelize.STRING,
        password: Sequelize.STRING
        }, {
          tableName: "users",
          sequelize,
          modelName: 'User',
        }
      ) 
    return this
    }
}

module.exports = User