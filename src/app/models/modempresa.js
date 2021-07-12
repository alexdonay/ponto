const Sequelize = require('sequelize')


class Empresa extends Sequelize.Model{
    static init(sequelize){
        super.init({
            razao_social: Sequelize.STRING,
            cnpj: Sequelize.STRING, 
            }, {
                
                tableName: "tbempresas",
               
               sequelize
            },{ sequelize, modelName: 'empresas'
            
         })
        return this
    }
}

module.exports = Empresa