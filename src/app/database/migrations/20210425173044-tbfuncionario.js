'use strict';

const sequelize = require("sequelize");

module.exports = {
  up: async (queryInterface, Sequelize) => {
   
   await queryInterface.createTable('tbfuncionarios',
    { 
      id: {
      type: sequelize.INTEGER,
      allowNull:false,
      autoIncrement: true,
      primaryKey: true
      
    },
    nome:{
      type: sequelize.STRING,
      allowNull: false
    },
    cpf:{
      type: sequelize.STRING,
      allowNull: false
    },
    ctps:{
      type: sequelize.STRING,
      allowNull: false
    },
    cpf:{
      type: sequelize.STRING,
      allowNull: false
    },
    idempresa:{
      type: sequelize.INTEGER,
      allowNull: false
    },
    segjustificativa:{
      type: sequelize.INTEGER,
      allowNull: false
    },
    segentrada:{
      type: sequelize.TIME,
      allowNull: false
    },
    segentradainter:{
      type: sequelize.TIME,
      allowNull: false
    },
    segsaidainter:{
      type: sequelize.TIME,
      allowNull: false
    },
    segsaida:{
      type: sequelize.TIME,
      allowNull: false
    },
    terjustificativa:{
      type: sequelize.INTEGER,
      allowNull: false
    },
    terentrada:{
      type: sequelize.TIME,
      allowNull: false
    },
    terentradainter:{
      type: sequelize.TIME,
      allowNull: false
    },
    tersaidainter:{
      type: sequelize.TIME,
      allowNull: false
    },
    tersaida:{
      type: sequelize.TIME,
      allowNull: false
    },
    quajustificativa:{
      type: sequelize.INTEGER,
      allowNull: false
    },
    quaentrada:{
      type: sequelize.TIME,
      allowNull: false
    },
    quaentradainter:{
      type: sequelize.TIME,
      allowNull: false
    },
    quasaidainter:{
      type: sequelize.TIME,
      allowNull: false
    },
    quasaida:{
      type: sequelize.TIME,
      allowNull: false
    },
    quijustificativa:{
      type: sequelize.INTEGER,
      allowNull: false
    },
    quientrada:{
      type: sequelize.TIME,
      allowNull: false
    },
    quientradainter:{
      type: sequelize.TIME,
      allowNull: false
    },
    quisaidainter:{
      type: sequelize.TIME,
      allowNull: false
    },
    quisaida:{
      type: sequelize.TIME,
      allowNull: false
    },
    sexjustificativa:{
      type: sequelize.INTEGER,
      allowNull: false
    },
    sexentrada:{
      type: sequelize.TIME,
      allowNull: false
    },
    sexentradainter:{
      type: sequelize.TIME,
      allowNull: false
    },
    sexsaidainter:{
      type: sequelize.TIME,
      allowNull: false
    },
    sexsaida:{
      type: sequelize.TIME,
      allowNull: false
    },
    sabjustificativa:{
      type: sequelize.INTEGER,
      allowNull: false
    },
    sabentrada:{
      type: sequelize.TIME,
      allowNull: false
    },
    sabentradainter:{
      type: sequelize.TIME,
      allowNull: false
    },
    sabsaidainter:{
      type: sequelize.TIME,
      allowNull: false
    },
    sabsaida:{
      type: sequelize.TIME,
      allowNull: false
    },
    domjustificativa:{
      type: sequelize.INTEGER,
      allowNull: false
    },
    domentrada:{
      type: sequelize.TIME,
      allowNull: false
    },
    domentradainter:{
      type: sequelize.TIME,
      allowNull: false
    },
    domsaidainter:{
      type: sequelize.TIME,
      allowNull: false
    },
    domsaida:{
      type: sequelize.TIME,
      allowNull: false
    },
    created_at: {
      type: sequelize.TIME,
      allowNull:false
    },
    updated_at: {
      type: sequelize.TIME,
      allowNull:false
    }
    
   
    });
   
   
  },

  down: async (queryInterface, Sequelize) => {
  await queryInterface.dropTable('tbfuncionarios');
     
  }
};
