const Sequelize = require('sequelize')
const Feriado = require('../models/modferiado')
const User = require('../models/user')
const Empresa = require('../models/modempresa')
const Empregado = require('../models/modempregado')
const Ponto = require('../models/modeponto')
const Dbconfig = require('../../config/database')
const models = [Empresa, Feriado,Empregado,Ponto,User]



class Database {
  constructor(){
    this.init()
  }
  init(){
    this.connection = new Sequelize(Dbconfig)
    models
      .map(model => model.init(this.connection))
      .map(model => model.associate && model.associate(this.connection.models))
  }

}
module.exports = new Database()
