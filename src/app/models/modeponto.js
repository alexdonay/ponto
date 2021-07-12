const { Model } = require('sequelize')
const Sequelize = require('sequelize')
const database = require('../../config/database')
const Empresa = require('./modempresa')
const Empregado = require('./modempregado')

class Ponto extends Sequelize.Model{
    static init(sequelize){
        super.init(
            {
                idfunc: {
                    type: Sequelize.INTEGER,
                    allowNull:false,
                    references: {
                        model: Empregado,
                        key:'id',
                    }
                  },
                  data:{
                    type: Sequelize.DATE,
                    allowNull: false
                  },
                  entrada:{
                    type: Sequelize.TIME,
                    allowNull: true
                  },
                  entradaintervalo:{
                  type: Sequelize.TIME,
                  allowNull: true
                },
                saidaintervalo:{
                  type: Sequelize.TIME,
                  allowNull: true
                },
                saida:{
                  type: Sequelize.TIME,
                  allowNull: true
                },
                hrtrabalhada:{
                  type: Sequelize.TIME,
                  allowNull: true
                },
                hrnormal:{
                  type: Sequelize.TIME,
                  allowNull: true
                },
                hr50:{
                  type: Sequelize.TIME,
                  allowNull: true
                },
                hr100:{
                  type: Sequelize.TIME,
                  allowNull: true
                },
                hrnoturna:{
                  type: Sequelize.TIME,
                  allowNull: true
                },
                falta:{
                  type: Sequelize.TIME,
                  allowNull: true
                },
                justificativa:{
                  type: Sequelize.INTEGER,
                  allowNull: true
                },
                competencia:{
                  type: Sequelize.STRING,
                  allowNull: true
                },
            }, {
               tableName: "tblancponto",
               sequelize
          },{ sequelize, modelName: 'ponto' },
          Ponto.associate =(models)=>{
          Ponto.belongsTo(models.Empregado,{
          as: 'empregado',
          foreignKey:'idfunc',
        })
      })
      return this
    }
}

module.exports = Ponto