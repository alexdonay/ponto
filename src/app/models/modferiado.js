const Sequelize = require('sequelize')

class Feriado extends Sequelize.Model{
    static init(sequelize){
        super.init(
            {
            data: Sequelize.DATE,
            descricao: Sequelize.STRING, 

            }, {
               tableName: "tbferiados",
               
               sequelize
            }
        )
        return this
    }
}

module.exports = Feriado