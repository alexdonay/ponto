const { Model } = require('sequelize')
const Sequelize = require('sequelize')
const database = require('../../config/database')
const Empresa = require('./modempresa')

class Empregado extends Sequelize.Model{
    static init(sequelize){
        super.init(
            {
            nome: Sequelize.STRING,
            cpf: Sequelize.STRING,
            ctps: Sequelize.STRING,   
            idempresa: {
                type: Sequelize.INTEGER,
                references: {
                    model: Empresa,
                    key:'id',

                }
            },
            segjustificativa: Sequelize.INTEGER,
            segentrada: Sequelize.TIME,
            segentradainter:Sequelize.TIME,
            segsaidainter:Sequelize.TIME,
            segsaida:Sequelize.TIME,
            terjustificativa: Sequelize.INTEGER,
            terentrada: Sequelize.TIME,
            terentradainter:Sequelize.TIME,
            tersaidainter:Sequelize.TIME,
            tersaida:Sequelize.TIME,
            quajustificativa: Sequelize.INTEGER,
            quaentrada: Sequelize.TIME,
            quaentradainter:Sequelize.TIME,
            quasaidainter:Sequelize.TIME,
            quasaida:Sequelize.TIME,
            quijustificativa: Sequelize.INTEGER,
            quientrada: Sequelize.TIME,
            quientradainter:Sequelize.TIME,
            quisaidainter:Sequelize.TIME,
            quisaida:Sequelize.TIME,
            sexjustificativa: Sequelize.INTEGER,
            sexentrada: Sequelize.TIME,
            sexentradainter:Sequelize.TIME,
            sexsaidainter:Sequelize.TIME,
            sexsaida:Sequelize.TIME,
            sabjustificativa: Sequelize.INTEGER,
            sabentrada: Sequelize.TIME,
            sabentradainter:Sequelize.TIME,
            sabsaidainter:Sequelize.TIME,
            sabsaida:Sequelize.TIME,
            domjustificativa: Sequelize.INTEGER,
            domentrada: Sequelize.TIME,
            domentradainter:Sequelize.TIME,
            domsaidainter:Sequelize.TIME,
            domsaida:Sequelize.TIME,
            }, {
               tableName: "tbfuncionarios",
               
               sequelize
            },{ sequelize, modelName: 'empregado' },
            
            Empregado.associate =(models)=>{
                Empregado.belongsTo(models.Empresa,{

                    as: 'empresa',
                    foreignKey:'idempresa',
                })

            }
                
           
            )

            
        return this
    }
}


module.exports = Empregado